import React, { useState, useEffect } from 'react';

import * as anchor from '@project-serum/anchor';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';

import { CircularProgress } from '@material-ui/core';

import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
} from '../candy-machine';
import { useAnchorWallet } from '@solana/wallet-adapter-react';

//_ REDUX
import { useSelector, useDispatch } from 'react-redux';
import {
  setStartDate,
  setIsMintingFalse,
  setIsMintingTrue,
  setItemsAvailable,
  setItemsRedeemed,
  setItemsRemaining,
  setAlertState,
  setBalance,
} from '../redux/slices/walletSlice';
import { RootState } from '../redux/store';

const MintButton = () => {
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const dispatch = useDispatch();

  const isActive = useSelector(
    (state: RootState) => state.walletReducer.isActive,
  );
  const isMinting = useSelector(
    (state: RootState) => state.walletReducer.isMinting,
  );
  const isSoldOut = useSelector(
    (state: RootState) => state.walletReducer.isSoldOut,
  );

  const isStarted = useSelector(
    (state: RootState) => state.walletReducer.isStarted,
  );

  const config = useSelector((state: RootState) => state.walletReducer.config);

  const connection = useSelector(
    (state: RootState) => state.walletReducer.connection,
  );
  const candyMachineId = useSelector(
    (state: RootState) => state.walletReducer.candyMachineId,
  );
  const treasury = useSelector(
    (state: RootState) => state.walletReducer.treasury,
  );
  const txTimeout = useSelector(
    (state: RootState) => state.walletReducer.tsxTimeout,
  );
  const alertState = useSelector(
    (state: RootState) => state.walletReducer.alertState,
  );

  const wallet = useAnchorWallet();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        candyMachineId,
        connection,
      );

      dispatch(setStartDate(goLiveDate));
      dispatch(setItemsAvailable(itemsAvailable));
      dispatch(setItemsRemaining(itemsRemaining));
      dispatch(setItemsRedeemed(itemsRedeemed));
      setItemsRedeemed(itemsRedeemed);

      //   //!
      dispatch(setStartDate(goLiveDate));

      setCandyMachine(candyMachine);
    })();
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await connection.getBalance(wallet.publicKey);
        dispatch(setBalance(balance / LAMPORTS_PER_SOL));
        // setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  useEffect(refreshCandyMachineState, [wallet, candyMachineId, connection]);

  const MintButton = () => {
    return (
      <WalletDialogButton
        disabled={isSoldOut || isMinting || isActive}
        onClick={onMint}
        variant="contained"
      >
        <p> MINT</p>
      </WalletDialogButton>
    );
  };

  const onMint = async () => {
    try {
      dispatch(setIsMintingTrue());
      //   setIsMinting(true);

      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          config,
          wallet.publicKey,
          treasury,
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          txTimeout,
          connection,
          'singleGossip',
          false,
        );

        if (!status?.err) {
          console.log('hello');
          dispatch(
            setAlertState({
              open: true,
              message: 'Congratulations! Mint succeeded!',
              severity: 'success',
            }),
          );
        } else {
          dispatch(
            setAlertState({
              open: true,
              message: 'Mint failed! Please try again!',
              severity: 'success',
            }),
          );
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!';

      switch (message) {
        case 'Candy machine is empty!':
          dispatch(
            setAlertState({
              open: true,
              message: 'SOLD OUT',
              severity: 'error',
            }),
          );
          break;

        default:
          break;
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      if (wallet) {
        const balance = await connection.getBalance(wallet.publicKey);

        dispatch(setBalance(balance / LAMPORTS_PER_SOL));
      }
      dispatch(setIsMintingFalse());

      setAlertState({
        open: true,
        message: 'Congratulations ! You have minted a Shark ',
        severity: 'error',
      });
      refreshCandyMachineState();
    }
  };

  return (
    <div>
      {isSoldOut ? <p>SOlD OUT</p> : ''}
      {isMinting ? <CircularProgress /> : MintButton()}
    </div>
  );
};

export default MintButton;
