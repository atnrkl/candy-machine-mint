import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import rocketship from "./images/1.png";

//? IMPORT COMPONENTS

//_ REDUX
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { setAlertState } from "./redux/slices/walletSlice";

import "./styles/stars.scss";
import styled from "styled-components";
import Nftinfo from "./components/Nftinfo";
import Navbar from "./components/Navbar";
import MintButton from "./components/MintButton";

const Home = () => {
  const alertState = useSelector(
    (state: RootState) => state.walletReducer.alertState
  );

  const dispatch = useDispatch();

  return (
    <div className="flex items-center min-h-screen justify-center flex-col bg-blue-900  text-gray-100 overflow-hidden">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="shooting-stars"></div>
      </div>
      <Navbar />
      <StyledShip>
        <img src={rocketship} alt="rocketship" />
      </StyledShip>
      <MintButton />
      <Nftinfo />
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => dispatch(setAlertState({ ...alertState, open: false }))}
      >
        <Alert
          onClose={() =>
            dispatch(setAlertState({ ...alertState, open: false }))
          }
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

const StyledShip = styled.div`
  z-index: 1;
  overflow: hidden;
  animation: MoveUpDown 8s linear infinite;

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateX(-40px);
    }
  }
`;

export default Home;
