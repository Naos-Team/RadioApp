import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Routes from './src/navigation/Routes'
import { AuthProvider } from './src/providers/AuthProvider';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import { NavigationContainer } from '@react-navigation/native'

TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE]
})

const App = () => {

    const setUpTrackPlayer = async () => {
        try {

            console.log("Init player");

            TrackPlayer.setupPlayer().then(() => {
                console.log("Success!");
            });

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setUpTrackPlayer();
        return () => {
            console.log("destroy player");
            TrackPlayer.destroy();
        }
    }, [])

    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>

    )
}

export default App