const TOKEN_FIELD = "token";

export class TokenHandler {
    constructor(protected localStorage: any) {}

    getToken() {
        const AUTH_TOKEN = this.localStorage.getItem(TOKEN_FIELD);
        return AUTH_TOKEN || undefined;
    }

    setToken(token: string) {
        this.localStorage.setItem(TOKEN_FIELD, token);
    }

    removeToken() {
        this.localStorage.removeItem(TOKEN_FIELD);
    }

    hasToken() {
        const token = this.localStorage.getItem(TOKEN_FIELD);
        return !!token;
    }
}
