import React, { useContext, useEffect } from "react";
import { useUserStore } from "./user-store";

type Context = {};

export const AppContext = React.createContext<Context | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const { initializeAuth } = useUserStore();

   useEffect(() => {
      initializeAuth();
   }, [initializeAuth]);

   const appContext: Context = {};

   return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
   const context = useContext(AppContext);

   if (!context) {
      throw new Error('useAppContext must be used within a AppContextProvider');
   }

   return context;
}
