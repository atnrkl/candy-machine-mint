import './App.css';
import { useMemo } from 'react';

import Home from './Home';

import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';

import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import { createTheme, ThemeProvider } from '@material-ui/core';

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const theme = createTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: 'flex-start',
        padding: '16px 18px',
        margin: '2rem 3rem',
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: '18x 24px',
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <WalletDialogProvider>
            <Home />
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
