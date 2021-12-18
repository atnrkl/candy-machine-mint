import React from 'react';
import Countdown from 'react-countdown';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import MintButton from './MintButton';

import { setIsStartedTrue } from '../redux/slices/walletSlice';
import styled from 'styled-components';

const CountdownComponent = () => {
  const startDateLocal = new Date('30 Nov 2021 18:00:00 GMT');

  const startDate = useSelector(
    (state: RootState) => state.walletReducer.startDate,
  );
  const isStarted = useSelector(
    (state: RootState) => state.walletReducer.isStarted,
  );
  const dispatch = useDispatch();

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <MintButton />;
    } else {
      // Render a countdown

      return (
        <div className="relative object-cover items-center justify-center">
          {/* <div className="w-full h-45 object-cover absolute z-0">
            <ReactPlayer playing loop muted url={cdvideo} />
          </div> */}

          <StyledSpan>
            Days: {days} Hours: {hours} Minutes: {minutes} Seconds: {seconds}
          </StyledSpan>
        </div>
      );
    }
  };
  return (
    <Countdown
      date={startDate}
      onComplete={() => dispatch(setIsStartedTrue())}
      renderer={renderer}
    />
  );
};

const StyledSpan = styled.span`
  font-family: 'Press Start 2P', cursive;
  z-index: 1;
`;

export default CountdownComponent;
