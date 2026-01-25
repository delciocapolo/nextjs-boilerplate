// custom types according to your need

export namespace Signup {
    export type Params = {};

    export type Response = 
        { success: boolean; data: { token: string; } }
        | { success: boolean; message: string };
}

export namespace Signin {
    export type Params = {
        email: string;
        password: string;
    };

    export type Response = 
        { success: boolean; data: { token: string; } }
        | { success: boolean; message: string };
}

export namespace ValidateOTP {
    export type Params = {
        otp: string;
        token: string;
    };

    export type Response = 
        { success: boolean; data: { token: string; } }
        | { success: boolean; message: string };
}