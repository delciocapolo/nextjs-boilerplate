import { hasToken } from "@src/lib/client/utils/token";
import { authService } from "@src/services/auth";
import { User } from "@src/shared/@types/user";
import { create } from "zustand";

type UserStore = {
    user: User;
    isAuthenticated: boolean;
    isInitialized: boolean;

    logout: () => Promise<boolean>;
    getUser: () => Promise<boolean>;
    initializeUser: () => Promise<void>;
}

const initialUser: User = {
   id: undefined,
   name: undefined,
   email: undefined,
   roles: [],
}

export const useUserStore = create<UserStore>((set) => ({
    user: initialUser,
    isAuthenticated: false,
    isInitialized: false,
    
    initializeUser: async () => {
        if (hasToken()) {
         try {
            const payload = await authService.me();

            set({
               user: payload.data,
               isAuthenticated: true,
               isInitialized: true,
            });
         } catch (error) {
            console.error("Erro ao inicializar autenticação:", error);

            set({
               user: initialUser,
               isAuthenticated: false,
               isInitialized: true,
            });
         }
      } else {
         set({ isInitialized: true, isAuthenticated: false });
      }  
    },
    getUser: async () => {
        try {
         const payload = await authService.me();

         set({ user: payload.data, isAuthenticated: true, });

         return true;
      } catch (error) {
         console.error("Erro ao buscar usuário:", error);

         set({ user: initialUser, isAuthenticated: false, });

         return false;
      }
    },
    logout: async () => {
      try {
         await authService.logout();

         set({ user: initialUser, isAuthenticated: false, });

         return true;
      } catch (error) {
         console.error("Erro ao fazer logout:", error);

         set({ user: initialUser, isAuthenticated: false });

         return false;
      }
   },
}));