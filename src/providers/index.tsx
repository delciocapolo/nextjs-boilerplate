"use client";

import { ComponentProps } from "@shared/@types/global-props";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./app-context";

const queryClient = new QueryClient({});

export default function GlobalProvider({ children }: ComponentProps) {
   return (
      <QueryClientProvider client={queryClient}>
         <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
         >
            <AppProvider>
               {children}
            </AppProvider>
         </NextThemesProvider>
      </QueryClientProvider>
   );
}
