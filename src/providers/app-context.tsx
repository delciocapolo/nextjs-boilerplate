import { createContext, useContext, useEffect } from "react";
import { useUserStore } from "./user-store";

type Context = {};

const AppContext = createContext<Context | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { initializeUser } = useUserStore()
    const appContext: Context = {};

    useEffect(() => {
        initializeUser();
    }, [initializeUser])

    return (
        <AppContext.Provider value={appContext}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }

    return context;
}

