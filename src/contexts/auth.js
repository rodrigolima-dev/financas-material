import React, { createContext, useState } from "react";
import { database } from "../services/firebaseConnection";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ref, set } from "firebase/database";

export const AuthContext = createContext({});

export default function AuthProvider ({ children }) {
    const [ user, setUser ] = useState(null);
    const auth = getAuth();

    //Cadastrar usuário
    async function signUp(email, password, name) {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
            let uid = value.user.uid;
            const usersRef = ref(database, `users/${uid}`)

            await set(usersRef, {
                sale: 0,
                name: name
            })
            .then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email
                };
                setUser(data);
            })
        })
    }

    return (
        //!! está convertendo user para booleano, se estiver null é false.
        <AuthContext.Provider value={{signed: !!user, user, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}