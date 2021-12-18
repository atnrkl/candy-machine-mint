import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as anchor from '@project-serum/anchor';

export interface CounterState {
  balance: number;
  isActive: boolean;
  isSoldOut: boolean;
  isMinting: boolean;
  itemsAvailable: number;
  itemsRedeemed: number;
  itemsRemaining: number;
  startDate: any;
  alertState: any;
  treasury: anchor.web3.PublicKey;
  // wallet:any;
  connection: anchor.web3.Connection;
  config: anchor.web3.PublicKey;
  candyMachineId: anchor.web3.PublicKey;
  tsxTimeout: number;
  rpcHost: string;
  isStarted: boolean;
}

const initialState: CounterState = {
  tsxTimeout: 1000,
  rpcHost: process.env.REACT_APP_SOLANA_RPC_HOST!,
  connection: new anchor.web3.Connection(
    process.env.REACT_APP_SOLANA_RPC_HOST!,
  ),
  candyMachineId: new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID!,
  ),
  config: new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG!,
  ),
  treasury: new anchor.web3.PublicKey(process.env.REACT_APP_TREASURY_ADDRESS!),
  balance: 0,
  isActive: false,
  isSoldOut: false,
  isMinting: false,
  itemsAvailable: 0,
  itemsRedeemed: 0,
  isStarted: true,
  itemsRemaining: 0,
  startDate: new Date('30 Nov 2021 18:00:00 GMT'),
  alertState: {
    open: false,
    message: '',
    severity: undefined,
  },
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    // setConfig: (state, action: PayloadAction<string>) => {
    //   state.config = new anchor.web3.PublicKey(action.payload);
    // },
    // setCandyMachineId: (state, action: PayloadAction<string>) => {
    //   state.candyMachineId = new anchor.web3.PublicKey(action.payload);
    // },
    // setConnection: (state, action: PayloadAction<string>) => {
    //   state.connection = new anchor.web3.Connection(action.payload);
    // },
    // setTreasury: (state, action: PayloadAction<string>) => {
    //   state.treasury = new anchor.web3.PublicKey(action.payload);
    // },
    // setTsxTimeout: (state, action: PayloadAction<number>) => {
    //   state.tsxTimeout = action.payload;
    // },

    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setActiveFalse: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isActive = false;
    },
    setSoldOutTrue: state => {
      state.isSoldOut = true;
    },
    setIsMintingTrue: state => {
      state.isMinting = true;
    },
    setIsMintingFalse: state => {
      state.isMinting = false;
    },

    setItemsAvailable: (state, action: PayloadAction<number>) => {
      state.itemsAvailable = action.payload;
    },
    setItemsRedeemed: (state, action: PayloadAction<number>) => {
      state.itemsRedeemed = action.payload;
    },
    setItemsRemaining: (state, action: PayloadAction<number>) => {
      state.itemsRemaining = action.payload;
    },
    setStartDate: (state, action: PayloadAction<Date>) => {
      state.startDate = action.payload;
    },
    setIsStartedTrue: state => {
      state.isStarted = true;
    },

    setAlertState: (state, action: PayloadAction<any>) => {
      console.log(action.payload.open);
      console.log(action.payload.message);
      console.log(action.payload.severity);
      state.alertState = {
        open: action.payload.open,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveFalse,
  setIsMintingFalse,
  setIsMintingTrue,
  setSoldOutTrue,
  setItemsAvailable,
  setItemsRedeemed,
  setItemsRemaining,
  setStartDate,
  setAlertState,
  setBalance,
  setIsStartedTrue,
} = walletSlice.actions;

export default walletSlice.reducer;
