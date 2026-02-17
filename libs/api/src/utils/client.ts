import axios, { AxiosInstance } from "axios";
import { TokenHandler } from "./token.js";
import { Env } from "./environment.js";

export class Client extends TokenHandler {
    public client = {} as AxiosInstance;

    constructor(localStorage: any) {
        super(localStorage);

        this.client = axios.create({
            baseURL: Env.API_BASE_URL,
            withCredentials: false,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        this.client.interceptors.request.use(
            (error) => Promise.reject(error),
            (config) => {
                const AUTH_TOKEN = this.getToken();

                if (AUTH_TOKEN) {
                    (config.headers as any) = {
                        ...config.headers,
                        Authorization: `Bearer ${AUTH_TOKEN}`,
                    };
                }

                return config;
            },
        );
    }
}
