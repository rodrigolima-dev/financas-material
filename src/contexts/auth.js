import React, { createContext, useEffect, useState } from "react";
import { database } from "../services/firebaseConnection";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext({});

export default function AuthProvider ({ children }) {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ loadingAuth, setLoadingAuth ] = useState(false);
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
        setLoadingAuth(true); //Começa o loading

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
                setLoadingAuth(false); //Termina o loading
            })
        })
        .catch(() =>{
            window.alert('Tente novamente.');
            setLoadingAuth(false); //Termina o loading
        })
    }

    async function signIn (email, password){
        setLoadingAuth(true); //Começa o loading
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
                setLoadingAuth(false); //Termina o loading

            }, {
                onlyOnce: true
            })
        })
        .catch((err) => {
            window.alert('Usuário ou senha incorreto(s).');   
            setLoadingAuth(false); //Termina o loading
        })
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function SignOut() {
        await signOut(auth);
        await AsyncStorage.clear()
        .then(() => {
            setUser(null)
        })
    }

    return (
        //!! está convertendo user para booleano, se estiver null é false.
        <AuthContext.Provider value={{signed: !!user, user, loading, signUp, signIn, SignOut, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}