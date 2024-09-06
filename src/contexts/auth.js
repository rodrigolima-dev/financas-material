import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider ({ children }) {
    const [ user, setUser ] = useState({});

    return (
        //!! está convertendo user para booleano, se estiver null é false.
        <AuthContext.Provider value={{signed: !!user, user}}>
            {children}
        </AuthContext.Provider>
    );
}