import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, RefreshControl } from 'react-native'
import { HEIGHT, WIDTH } from '../utils/Constant'
import { ic_playcirle } from '../images/'

const DemandPlaylistItem = ({ playlist, ...rest }) => {

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.contentBackground} {...rest}>
                <Image
                    style={{
                        position: 'absolute',
                        top: 1,
                        bottom: 1,
                        right: 1,
                        left: 1,
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: WIDTH * 0.05
                    }}
                    source={{ uri: playlist.thumbnail }}
                />

                <View
                    style={{
                        position: 'absolute',
                        justifyContent: 'flex-end',
                        top: 1,
                        bottom: 1,
                        right: 1,
                        left: 1,
                        borderRadius: WIDTH * 0.05,
                        backgroundColor: 'rgba(0,0,0,0.1)'
                    }} >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginBottom: '4%',
                            marginHorizontal: '4%',
                            paddingHorizontal: '6%',
                            height: '35%',
                            borderRadius: WIDTH * 0.05,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                        <View style={{
                            flex: 1,
                            marginRight: WIDTH * 0.02
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: HEIGHT * 0.021,
                            }}
                                numberOfLines={1}
                                ellipsizeMode='tail'
                            >{playlist.name}</Text>
                            <Text style={{
                                color: '#cccccc',
                                fontSize: HEIGHT * 0.015
                            }}
                                numberOfLines={1}
                                ellipsizeMode='tail'>{playlist.total + " tracks"}</Text>
                        </View>

                        <Image
                            style={{
                                height: HEIGHT * 0.05,
                                width: HEIGHT * 0.05,
                                tintColor: 'white',
                            }}
                            source={require('../images/ic_playcirle.png')}
                        />

                    </View>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: WIDTH * 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentBackground: {
        height: WIDTH * 0.43,
        width: WIDTH * 0.43,
    }
})

export default DemandPlaylistItem