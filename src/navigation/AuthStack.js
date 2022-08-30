import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, LoginScreen, SignupScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function AuthStack(){
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

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName= {routeName}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>

        </NavigationContainer>
        
    )
}