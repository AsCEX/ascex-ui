import {createContext, useState} from "react";
import { AuthContextType, AuthProviderProps } from "auth";
import Cookies from "js-cookie";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);


const AuthProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] =
        useState<string | null | undefined>(Cookies.get('user') ? JSON.parse(Cookies.get('user') ?? '') : undefined);
    const [token] = useState<string | null | undefined>( Cookies.get('laravel_session') ?? undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("isLoggedIn") === "true");
    const [isLoading, setIsLoading] = useState(true);

    const logout = () => {
        Cookies.remove("isLoggedIn");
        setUser(undefined);
        setIsLoggedIn(false);
    }

    const login = () => {
        setIsLoggedIn(true);
    }

    const authValue = {
        isLoggedIn,
        isLoading,
        setIsLoading,
        setIsLoggedIn,
        setUser,
        login,
        logout,
        token,
        user
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;