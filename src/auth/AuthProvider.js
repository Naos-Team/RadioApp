import React, { createContext, useState } from 'react';
import { 
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    firebaseSet,
    firebaseDatabaseRef,
    firebaseDatabase,
    firebaseUpdate,
    firebaseRead
} from './firebase';

const AuthContext = createContext({});
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async(email, password) => {
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            setUser(user)
                        })
                        .catch((error) => {
                            alert(`Error Login: ${error.message}`);
                        })
                },

                signup: async (email, password) => {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((useCredential) => {
                            const user = useCredential.user
                            alert('Successfully registered')
                            setUser(user)
                            firebaseSet(firebaseDatabaseRef(
                                firebaseDatabase,
                                `users/${user.uid}`
                            ),{
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
                    signOut(auth)
                        .then(() => {
                        // Sign-out successful.
                            setUser(null)
                        })
                        .catch((error) => {
                        // An error happened.
                        alert("Error signOut")
                        });
                },

                update: async(name, address, phone) => {
                    firebaseUpdate(firebaseDatabaseRef(
                        firebaseDatabase,
                        `users/${user.uid}`
                    ),{
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
                        const starCountRef = firebaseDatabaseRef(firebaseDatabase, `users/${user.uid}`)
                        firebaseRead(starCountRef, (snapshot) => {
                            const data = snapshot.val()
                            return data
                        })
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