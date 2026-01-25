
import { client } from "@src/lib/client";
import { Signin, Signup, ValidateOTP } from "./types";
import { removeToken } from "@src/lib/client/utils/token";

export const authService = {
    signup: async (params: Signup.Params) => {
        try {
            const { data } = await client.post<Signup.Response>("/v1/auth/signup", params);
            return data;
        } catch (error: any) {
            throw error.response?.data?.message || "Erro Desconhecido";
        }
    },
    signin: async (params: Signin.Params) => {
        try {
            const { data } = await client.post<Signin.Response>("/v1/auth/signin", params);
            return data;
        } catch (error: any) {
            throw error.response?.data?.message || "Erro Desconhecido";
        }
    },
    validateOTP: async (params: ValidateOTP.Params) => {
        try {
            const { data } = await client.post<ValidateOTP.Response>("/v1/auth/validate", params);
            return data;
        } catch (error: any) {
            throw error.response?.data?.message || "Erro Desconhecido";
        }
    },
    me: async () => {
        try {
            const { data } = await client.get("/v1/auth/me");
            return data;
        } catch (error: any) {
            throw error.response?.data?.message || "Erro Desconhecido";
        }
    },
    logout: async () => {
      try {
         removeToken();
         const { data } = await client.get("/auth/logout");
         return data;
      } catch (error: any) {
         throw error?.response?.data?.error || error.message || "Error desconhecido";
      }
   },
}
