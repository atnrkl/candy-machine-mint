import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

//? IMPORT COMPONENTS
import Navbar from './components/Navbar';
import MintContainer from './components/MintContainer';

//_ REDUX
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { setAlertState } from './redux/slices/walletSlice';

import './styles/stars.scss';
import MiddleSection from './components/MiddleSection';

const Home = () => {
  const alertState = useSelector(
    (state: RootState) => state.walletReducer.alertState,
  );

  const dispatch = useDispatch();

  return (
    <div className="flex items-center min-h-screen justify-center flex-col bg-blue-900  text-gray-100">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="shooting-stars"></div>
      </div>

      <div className="absolute left-0 top-0 w-screen pb-40">
        <Navbar />
      </div>
      <div className="pt-60">
        <MintContainer />
      </div>

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
      <div className="w-100 items-center justify-center pt-80">
        <MiddleSection />
      </div>
    </div>
  );
};

export default Home;
