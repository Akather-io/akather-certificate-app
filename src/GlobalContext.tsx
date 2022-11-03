"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Wallet } from "./configs/near-wallet";
import { isClient } from "./utils/next";

type GlobalContextState = {
  wallet: Wallet;
  isSignedIn: boolean | undefined;
};

const GlobalContext = createContext<GlobalContextState>(
  {} as GlobalContextState
);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const wallet = useMemo(
    () =>
      new Wallet({
        createAccessKeyFor: "akather1.leopham.testnet",
      }),
    []
  );
  const [isSignedIn, setIsSignedIn] = useState<boolean>();

  useEffect(() => {
    if (isClient()) {
      wallet.startUp().then(setIsSignedIn);
    }
  }, [wallet]);

  const contextValue = useMemo(() => {
    return { wallet, isSignedIn };
  }, [wallet, isSignedIn]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
