import React, { useEffect, useReducer } from 'react'
import {
    SafeAreaView, ScrollView, View, Image,
    RefreshControl, Text, StyleSheet,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { HEIGHT, WIDTH } from '../../utils/Constant'

const PlaylistDetailScreen = ({ navigation, route }) => {

    const { name, thumb } = route.params;


    console.log({ name, thumb });


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}
            // refreshControl={
            //     <RefreshControl
            //         refreshing={state.refreshing}
            //         onRefresh={onRefresh}
            //     />
            // }
            >
                {/* <MessageModal
                    modalVisible={state.modalVisible}
                    setModalVisible={() => {
                        dispatch(SET_MODAL_VISIBLE('', '', false));
                    }}
                    param={{ title: state.modalTitle, message: state.modalMessage }}
                /> */}

                <View style={styles.view_image}>
                    <Image
                        style={styles.image}
                        source={{ uri: thumb }}
                        resizeMode='cover'
                    />

                    <View style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        alignItems: 'center',
                    }}>

                        <LinearGradient
                            style={{
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                            }}

                            colors={[
                                'rgba(255,255,255,0.65)',
                                'rgba(255,255,255,0.65)',
                                'rgba(255,255,255,0.65)',
                                'rgba(255,255,255,0.75)',
                                'rgba(255,255,255,0.85)',
                                'rgba(255,255,255,0.85)',
                            ]}
                        />

                        <Image
                            source={{ uri: thumb }}
                            style={{
                                position: 'absolute',
                                top: '10%',
                                height: HEIGHT * 0.28,
                                width: HEIGHT * 0.28,
                                borderRadius: HEIGHT * 0.02,
                                marginBottom: HEIGHT * 0.03
                            }}
                        />



                        <View style={{
                            position: 'absolute',
                            bottom: '7%',
                            width: WIDTH,
                            paddingHorizontal: WIDTH * 0.08,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                            <View style={{
                                flex: 1
                            }}>
                                <Text style={styles.title}
                                    numberOfLines={2}
                                    ellipsizeMode='tail'
                                >{name}</Text>
                                <Text style={{
                                    color: '#191919',
                                    fontSize: HEIGHT * 0.023,
                                }}>Total</Text>
                            </View>

                            <TouchableOpacity style={{
                            }}>
                                <Image source={require('../../images/ic_playcirle.png')}
                                    resizeMode='center'
                                    style={{
                                        width: HEIGHT * 0.065,
                                        height: HEIGHT * 0.065,
                                        tintColor: 'black',
                                    }}
                                />
                            </TouchableOpacity>

                        </View>
{/* 
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                height: 1,
                                backgroundColor: '#c2c2c2'
                            }}
                        /> */}


                    </View>


                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            position: 'absolute',
                            height: HEIGHT * 0.06,
                            width: HEIGHT * 0.06,
                            margin: WIDTH * 0.03
                        }}>
                        <Image
                            source={require('../../images/ic_back_arrow.png')}
                            style={{
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    </TouchableOpacity>

                </View>

                {/* {state.songs.length > 0 &&
                    <>
                        {state.songs.map((song, index) => {
                            return <SongItem
                                key={song.song_id}
                                url={song.song_thumb}
                                song_name={song.song_name}
                                onPress={() => playWithSelectedSong(song)}
                                artist_name={state.artists.map(artist => {
                                    if (artist.artist_id === song.artist_id) {
                                        return artist.artist_name
                                    }
                                })} />
                        })}
                    </>
                } */}
            </ScrollView>

            {/* {state.showProgress &&
                <Progressbar />
            } */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white'
    },

    view_image: {
        height: HEIGHT * 0.5,
        marginBottom: HEIGHT * 0.03
    },

    title: {
        color: 'black',
        fontSize: HEIGHT * 0.035,
        fontWeight: 'bold',
    },

    image: {
        height: '100%',
        width: '100%',
    }
})

export default PlaylistDetailScreen