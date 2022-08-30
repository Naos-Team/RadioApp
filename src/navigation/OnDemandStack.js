import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ONDEMAND_SCREEN } from '../utils/Constant';
import OnDemandScreen from '../screens/OnDemand/OnDemandScreen';

const Stack = createNativeStackNavigator();

const OnDemandStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={ONDEMAND_SCREEN}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name={ONDEMAND_SCREEN}
                component={OnDemandScreen}
            />
        </Stack.Navigator>
    )
}

export default OnDemandStack