import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Routes from './src/navigation'
import TrackPlayer, { RepeatMode } from 'react-native-track-player';

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
        <Routes />
    )
}

export default App