import { ReactNode } from "react";
import { create } from "zustand";
import { AuthService } from "@medicare.core.frontend/api";

const authService = new AuthService(window.localStorage);

type AuthUser = {
   id: number | undefined;
   name: string | undefined;
   email: string | undefined;
   permissions: Array<{ id: number; name: string; guard_name: string }>;
   roles: string[];
   menus: {
      id: number;
      name: string;
      link: string;
      icon: string;
      icon2: string;
      visible: number;
      type: "collapse" | "item";
      parent_id: number | null;
      children?: ReactNode[];
      page_code: string;
   }[];
};

type UserStore = {
   user: AuthUser;
   isAuthenticated: boolean;
   isLoading: boolean;
   isInitialized: boolean;
   error: string | null;

   // Actions
   initializeAuth: () => Promise<void>;
   getUser: () => Promise<boolean>;
   logout: () => Promise<boolean>;
   setUser: (user: AuthUser) => void;
   resetAuth: () => void;
};

const initialAuthUser: AuthUser = {
   id: undefined,
   name: undefined,
   email: undefined,
   permissions: [],
   roles: [],
   menus: [],
};

export const useUserStore = create<UserStore>((set) => ({
   error: null,
   isLoading: true,
   isInitialized: false,
   user: initialAuthUser,
   isAuthenticated: false,

   initializeAuth: async () => {
      if (authService.hasToken()) {
         try {
            set({ isLoading: true });

            const payload = await authService.me();

            set({
               user: payload.data,
               isAuthenticated: true,
               isLoading: false,
               isInitialized: true,
               error: null,
            });
         } catch (error) {
            console.error("Erro ao inicializar autenticação:", error);

            set({
               user: initialAuthUser,
               isAuthenticated: false,
               isLoading: false,
               isInitialized: true,
               error: error instanceof Error ? error.message : "Erro ao autenticar",
            });
         }
      } else {
         set({
            isLoading: false,
            isInitialized: true,
            isAuthenticated: false,
         });
      }
   },

   // Actions
   getUser: async () => {
      try {
         set({ isLoading: true, error: null });

         const payload = await authService.me();

         set({
            user: payload.data,
            isAuthenticated: true,
            isLoading: false,
            error: null,
         });

         return true;
      } catch (error) {
         console.error("Erro ao buscar usuário:", error);

         set({
            user: initialAuthUser,
            isAuthenticated: false,
            isLoading: false,
            error: error instanceof Error ? error.message : "Erro ao autenticar",
         });

         return false;
      }
   },

   logout: async () => {
      try {
         set({ isLoading: true, error: null });

         await authService.logout();

         set({
            user: initialAuthUser,
            isAuthenticated: false,
            isLoading: false,
            error: null,
         });

         return true;
      } catch (error) {
         console.error("Erro ao fazer logout:", error);

         set({
            isLoading: false,
            user: initialAuthUser,
            isAuthenticated: false,
            error: error instanceof Error ? error.message : "Erro ao fazer logout",
         });

         return false;
      }
   },

   setUser: (user: AuthUser) => {
      set({ user: user, isAuthenticated: true });
   },

   resetAuth: () => {
      authService.removeToken();

      set({
         error: null,
         isLoading: false,
         user: initialAuthUser,
         isAuthenticated: false,
      });
   },
}));