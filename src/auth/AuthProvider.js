import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const AuthContext = createContext({});
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async(email, password) => {
                    await auth().signInWithEmailAndPassword(email,password)
                    .then((userCredential) => {
                            const user = userCredential.user;
                            setUser(user)
                    })
                    .catch((error) => {
                            alert(`Error Login: ${error.message}`);
                    })
                },

                signup: async (email, password) => {
                    await auth().createUserWithEmailAndPassword(email,password)
                    .then((useCredential) => {
                            const user = useCredential.user
                            alert('Successfully registered')
                            setUser(user)
                            database()
                            .ref(`/users/${user.uid}`)
                            .set({
                                email: user.email,
                                emailVerified: user.emailVerified,
                                accessToken: user.accessToken,
                                name: '',
                                phone: '',
                                address: ''
                            })
                        })
                    .catch((error) => {
                        alert(`Cannot sign up, error ${error.message} Email: ${email}`)
                    })
                },

                logout: async () => {
                    await auth().signOut()
                    .then(() => {
                        setUser(null)
                    })
                    .catch((error) => {
                        alert("Error signOut")
                    });
                },

                update: async(name, address, phone) => {
                    database().ref(`users/${user.uid}`)
                    .update({
                        name: name,
                        address: address,
                        phone: phone
                    }).then(()=>{
                        alert(`Updated successful`)
                    }).catch((err)=>{
                        alert(err.message)
                    })
                },

                readData: async () =>{
                    try{
                        database().ref(`users/${user.uid}`)
                        .then(snapshot => {return snapshot.val()})
                    }
                    catch(error){
                        alert(error.message)
                    }
                },

                googleLogin: async () => {
                    try{
                        const { idToken } = await GoogleSignin.signIn();
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                        return auth().signInWithCredential(googleCredential);
                    }
                    catch(error){
                        alert(error.message)
                    }
                }
            }}>
            {children}

        </AuthContext.Provider>
    )
}

export {
    AuthProvider,
    AuthContext
}