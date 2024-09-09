import React, { createContext, useEffect, useState } from "react";
import { database } from "../services/firebaseConnection";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext({});

export default function AuthProvider ({ children }) {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false)
        }

        loadStorage();
    },[])

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
                storageUser(data);
            })
        })
    }

    async function signIn (email, password){
        await signInWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
            let uid = value.user.uid;
            const usersRef = ref(database, `users/${uid}`);

            await onValue(usersRef, (snapshot) => {
                let data = {
                    uid: uid,
                    name: snapshot.val().name,
                    email: value.user.email,
                }

                setUser(data);
                storageUser(data);
            }, {
                onlyOnce: true
            })
        })
        .catch((err) => {
            Alert.alert(err.code)
        })
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut () {
        await auth.signOut
    }

    return (
        //!! está convertendo user para booleano, se estiver null é false.
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, loading}}>
            {children}
        </AuthContext.Provider>
    );
}