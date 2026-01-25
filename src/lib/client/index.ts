"use client";

import axios from "axios";
import Env from "@src/config/environment";
import { getToken } from "./utils/token";

const baseUrl = Env.NEXT_PUBLIC_API_BASE_URL;
const client = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

// particularly, I prefer to follow the approach where I save the token in a cookie(httpOnly)
// and all requests are validated by the server, from there
client.interceptors.request.use(
    (config) => {
        const AUTH_TOKEN = getToken();

        if (AUTH_TOKEN) {
            (config.headers as any) = {
                ...config.headers,
                Authorization: `Bearer ${AUTH_TOKEN}`,
            };
        }

        return config;
    },
    (error) => Promise.reject(error),
);

export {
    client,
}
