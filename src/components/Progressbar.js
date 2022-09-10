import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { HEIGHT, WIDTH } from '../utils/Constant';

const Progressbar = () => {
    return (
        <View style={styles.view_progress}>
            <ActivityIndicator
                size={HEIGHT * 0.06}
                color='black'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view_progress: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Progressbar;