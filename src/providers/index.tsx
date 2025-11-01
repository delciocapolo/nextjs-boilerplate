"use client";

import { ComponentProps } from "@shared/@types/global-props";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

export default function GlobalProvider({ children }: ComponentProps) {
   return (
      <QueryClientProvider client={queryClient}>
         {children}
      </QueryClientProvider>
   );
}
