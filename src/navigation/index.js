import React from 'react';
import PlayerProvider from '../providers/PlayerProvider';
import MainStack from './MainStack';

export default function Routes() {
    return (
        
        <PlayerProvider>
            <MainStack />
        </PlayerProvider>

    )
}