import React, { useContext } from 'react';
import { Text } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { PlayerContext } from '../providers/PlayerProvider';
import { HEIGHT } from '../utils/Constant';
import MusicScreen from '../screens/MusicScreen';

const PlayerBottomSheet = () => {

    const { bottomSheet, setIsExpand } = useContext(PlayerContext);

    return (
        <BottomSheet
            ref={bottomSheet}
            initialSnap={1}
            snapPoints={[HEIGHT * 1, HEIGHT * 0.09]}
            renderContent={() => {
                return <MusicScreen/>
            }}
            enabledGestureInteraction={true}
            onOpenEnd={() => setIsExpand(false)}
            onCloseEnd={() => setIsExpand(true)}
        />
    );
}

export default PlayerBottomSheet