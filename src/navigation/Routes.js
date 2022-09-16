import React, { useContext, useState, useEffect } from 'react';
import AuthStack from "./AuthStack";
import TabNav from "./TabNav";
import MainStack from './MainStack';
import PlayerProvider from '../providers/PlayerProvider'
import { AuthContext } from '../providers/AuthProvider'
import auth from '@react-native-firebase/auth';


export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    return (
        <>
            {
                user
                    ?
                    <PlayerProvider>
                        <MainStack />
                    </PlayerProvider>
                    : <AuthStack />
            }


        </>

    );

}