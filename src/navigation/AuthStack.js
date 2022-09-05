import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, LoginScreen, SignupScreen, ForgotPassScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(true);
    let routeName
    useEffect(() => {
        setIsFirstLaunch(false)
    }, [isFirstLaunch]);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch == true) {
        routeName = 'Splash';
    } else {
        routeName = 'Login';
    }

    GoogleSignin.configure({
        androidClientId: "1062471900976-qqn922gl28rfuk3sq7hfl0udvqbjd703.apps.googleusercontent.com",
        webClientId: '1062471900976-c3hbq0t434ovs59jpvt2efmiqlcr997o.apps.googleusercontent.com',
    });

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={routeName}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />

            </Stack.Navigator>

        </NavigationContainer>

    )
}