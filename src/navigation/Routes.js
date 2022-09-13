import React, { useContext, useState, useEffect } from 'react';
import AuthStack from "./AuthStack";
import TabNav from "./TabNav";
import { AuthContext } from "../auth/AuthProvider";
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native'


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
        <NavigationContainer>
          {user ? <TabNav /> : <AuthStack />}
        </NavigationContainer>
    );

}