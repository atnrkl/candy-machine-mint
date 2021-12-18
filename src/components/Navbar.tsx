import React, { useEffect } from 'react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { setBalance } from '../redux/slices/walletSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { RootState } from '../redux/store';

import logo from '../images/logo1.png';
import styled from 'styled-components';

const Navbar = () => {
  const wallet = useAnchorWallet();

  const connection = useSelector(
    (state: RootState) => state.walletReducer.connection,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await connection.getBalance(wallet.publicKey);
        dispatch(setBalance(balance / LAMPORTS_PER_SOL));
        // setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  return (
    <>
      <nav className="flex items-center justify-center relative w-full h-60   ">
        <div className="absolute right-5 top-4  hidden lg:block">
          {/* <WalletDialogButton /> */}
        </div>

        <StyledImg src={logo} alt="SPACE SHARKS" />
      </nav>
    </>
  );
};

const StyledImg = styled.img`
  width: 750px;
  height: 500px;

  @media (max-width: 700px) {
    width: 450px;
    height: 300px;
  }
`;

export default Navbar;
