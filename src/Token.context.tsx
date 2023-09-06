
import React, { useState, createContext, ReactNode, useEffect } from "react";
interface TokenContextType {
    token: string | undefined;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}


export const UserTokenContext = createContext<TokenContextType | undefined>(undefined);

export const UserTokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        console.log('Token has changed:', token);
    }, [token]);

    return (
        <UserTokenContext.Provider value={{ token, setToken }}>
            {children}
        </UserTokenContext.Provider>
    );
};