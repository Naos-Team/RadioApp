import React, { createContext, useState, useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { HEIGHT, WIDTH } from '../utils/Constant';
import PlayerBottomSheet from '../components/PlayerBottomSheet';

export const PlayerContext = createContext({});

const PlayerProvider = ({ children }) => {
    const bottomSheet = useRef();
    const [isExpand, setIsExpand] = useState(true);

    return (
        <PlayerContext.Provider
            value={{
                bottomSheet,
                setIsExpand,
                isExpand,
            }}>
            <SafeAreaView style={{
                flex: 1,
            }}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: HEIGHT * 0.09
                }}>
                    {children}
                </View>
                <PlayerBottomSheet />
            </SafeAreaView>
        </PlayerContext.Provider>
    )
}

export default PlayerProvider