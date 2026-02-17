import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "../config/theme.js";
import { ToastContainer } from "react-toastify";
import { MantineProvider } from "@mantine/core";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type GlobalProviderProps = {
   children: ReactNode;
};

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

export function GlobalProvider({ children }: GlobalProviderProps) {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <QueryClientProvider client={queryClient}>
            <MantineProvider>
               <ThemeProvider theme={defaultTheme}>
                  <CssBaseline />
                  <ToastContainer
                     position="top-right"
                     autoClose={3000}
                     hideProgressBar={false}
                     newestOnTop={false}
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
                  />

                  {children}
               </ThemeProvider>
            </MantineProvider>
         </QueryClientProvider>
      </LocalizationProvider>
   );
}
