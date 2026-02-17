import { Client } from "../../utils/client.js";
import { Auth } from "./types.js";

export class AuthService extends Client {
    constructor(localStorage: any) {
        super(localStorage);
    }

    public async login(params: Auth.Login.Params) {
        try {
            const { data } = await this.client.post("auth/login", params);
            this.setToken(data.access_token);
            return data;
        } catch (error: any) {
            throw new Error(error?.response?.data?.error || error.message || "Error desconhecido");
        }
    }

    public async me() {
        try {
            const { data } = await this.client.get("auth/me");
            return data;
        } catch (error: any) {
            throw new Error(error?.response?.data?.error || error.message || "Error desconhecido");
        }
    }

    public async logout() {
        try {
            const { data } = await this.client.get("auth/logout");
            return data;
        } catch (error: any) {
            throw new Error(error?.response?.data?.error || error.message || "Error desconhecido");
        }
    }
}
