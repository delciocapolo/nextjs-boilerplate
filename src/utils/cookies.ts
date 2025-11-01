"use client";

const TOKEN_FIELD = "1a650323";
const REFRESH_TOKEN_FIELD = "02263c807adb";

export const getToken = () => {
    // traditional logic to get token
    const AUTH_TOKEN = localStorage.getItem(TOKEN_FIELD);
    return AUTH_TOKEN || undefined;
}

export const setToken = (token: string) => {
    // tradition logic to save token
    localStorage.setItem(TOKEN_FIELD, token);
}
