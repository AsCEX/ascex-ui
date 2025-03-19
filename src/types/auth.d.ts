import React, {ReactNode} from "react";

declare module 'auth' {
    export interface AuthProviderProps {
        children: ReactNode
    }
    interface User {
        id: string;
        name: string;
        email: string;
    }

    export type AuthContextType = {
        user?: any | null,
        token?: string | null,
        isLoggedIn: boolean,
        isLoading: boolean,
        setIsLoggedIn:  React.Dispatch<React.SetStateAction<boolean>>,
        logout: () => void,
        login: () => void
    }
}
