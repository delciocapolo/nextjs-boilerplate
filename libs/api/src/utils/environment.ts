export const getEnvironment = () => {
    if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
        const env = (import.meta as any).env;

        return {
            API_BASE_URL: env.VITE_API_BASE_URL,
        };
    }

    if (typeof process !== 'undefined' && process.env) {
        return {
            API_BASE_URL: process.env.API_BASE_URL,
        };
    }

    return {
        baseURL: 'http://localhost:3000',
    };
};

export const Env = {
    ...getEnvironment(),
};
