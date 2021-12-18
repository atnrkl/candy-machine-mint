//? SOLANA
import { shortenAddress } from '../candy-machine';
import { useAnchorWallet } from '@solana/wallet-adapter-react';

//_ REDUX
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import CountdownComponent from './CountdownComponent';
import bgvideo from '../images/videos/bg-noise.mp4';

//* REACT
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import MintButton from './MintButton';
import { useState, useEffect } from 'react';

const MintContainer = () => {
  const wallet = useAnchorWallet();

  const itemsRemaining = useSelector(
    (state: RootState) => state.walletReducer.itemsRemaining,
  );

  const itemsAvailable = useSelector(
    (state: RootState) => state.walletReducer.itemsAvailable,
  );

  const isStarted = useSelector(
    (state: RootState) => state.walletReducer.isStarted,
  );

  const itemsRedeemed = useSelector(
    (state: RootState) => state.walletReducer.itemsRedeemed,
  );

  const balance = useSelector(
    (state: RootState) => state.walletReducer.balance,
  );

  return (
    <div className="w-full  flex flex-col space-y-10 lg:space-y-0 lg:flex-row  items-center justify-around p-10  lg:space-x-44  ">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="shooting-stars"></div>
      </div>
      <div className="mint-container overflow-hidden rounded-md">
        <div className="w-full h-45 object-cover absolute z-0 ">
          <ReactPlayer playing loop muted url={bgvideo} />
        </div>

        <div className="z-10 flex flex-col justify-center items-center">
          <Styled2SOL>0.05 SOL</Styled2SOL>
          <MintContainerText>for each shark</MintContainerText>
          {wallet ? (
            <span>
              <MintContainerText>
                Wallet {shortenAddress(wallet.publicKey.toBase58() || '')}
              </MintContainerText>
              <MintContainerText>Balance: {balance} </MintContainerText>
            </span>
          ) : (
            <MintContainerText>Wallet is not connected</MintContainerText>
          )}

          {/* //? item states */}

          {/* {wallet && itemsRemaining === 0 && isStarted ? (
            <Styled2SOL>SOLD OUT</Styled2SOL>
          ) : (
            ''
          )} */}
          {console.log(
            'yes bravo you found out there are 7777 supply, anyway it was told to 3333 will be burned. checkout the discord',
          )}
          <div className="text-center">
            {/* //? fixed amount, can be referred to itemsAvailable */}
            {isStarted && wallet && (
              <MintContainerText>Total 4444</MintContainerText>
            )}

            {isStarted && wallet && (
              <MintContainerText>Redeemed {itemsRedeemed}</MintContainerText>
            )}
          </div>

          {itemsRedeemed < 4443 && <MintButton />}
        </div>
      </div>

      {/* //! activate when started */}
      {/* <div>{isStarted ? '' : <CountdownComponent />}</div> */}
      {/* <CountdownComponent /> */}
    </div>
  );
};

const Styled2SOL = styled.h1`
  font-family: orbitron, sans-serif;

  font-weight: 700;

  font-style: normal;
  font-size: 2.4rem;
`;

const MintContainerText = styled.p`
  font-family: orbitron, sans-serif;

  font-weight: 300;

  font-style: normal;
  font-size: 1rem;
`;

export default MintContainer;
