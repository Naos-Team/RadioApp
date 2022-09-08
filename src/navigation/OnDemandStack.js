import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ONDEMAND_SCREEN, PLAYLISTDETAIL_SCREEN } from '../utils/Constant';
import OnDemandScreen from '../screens/OnDemand/OnDemandScreen';
import PlaylistDetailScreen from '../screens/OnDemand/PlaylistDetailScreen';

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
            <Stack.Screen
                name={PLAYLISTDETAIL_SCREEN}
                component={PlaylistDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default OnDemandStack