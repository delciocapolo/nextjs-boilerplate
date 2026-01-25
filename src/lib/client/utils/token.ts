const TOKEN_FIELD = "1a650323";

export const getToken = () => {
   const AUTH_TOKEN = localStorage.getItem(TOKEN_FIELD);
   return AUTH_TOKEN || undefined;
}

export const setToken = (token: string) => {
   localStorage.setItem(TOKEN_FIELD, token);
}

export const removeToken = () => {
   localStorage.removeItem(TOKEN_FIELD);
}

export const hasToken = () => {
   const token = localStorage.getItem("token");
   return !!token;
};