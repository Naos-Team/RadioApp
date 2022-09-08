import React, { useEffect, useReducer } from 'react'
import {
    SafeAreaView, ScrollView, View, Image,
    RefreshControl, Text, StyleSheet,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { HEIGHT, WIDTH } from '../../utils/Constant'

const PlaylistDetailScreen = ({ title, thumb, total  }) => {

    const thumb = 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/289693821_582015943280803_2102006602626651935_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8kGj2ZZQh7MAX_Dr2Wg&_nc_ht=scontent.fdad3-6.fna&oh=00_AT99iuane6fbqgw8T3ePqVHDwHE8rDu1UQliP4lK8pAy4g&oe=631C3364'
    const title = 'song tol tmp3'

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
                    <LinearGradient
                        colors={[
                            'rgba(255, 255, 255, 0.0)',
                            'rgba(255, 255, 255, 0.0)',
                            'rgba(255, 255, 255, 0.1)',
                            'rgba(255, 255, 255, 0.4)',
                            'rgba(255, 255, 255, 0.6)',
                            'rgba(255, 255, 255, 0.8)',
                            'rgba(255, 255, 255, 1)']}
                        style={{
                            position: 'absolute',
                            height: HEIGHT * 0.4,
                            width: '100%'
                        }}
                    />

                    <View style={styles.view_title}>
                        <Text style={styles.title}
                            numberOfLines={2}
                            ellipsizeMode='tail'
                        >{title}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity style={{
                                marginVertical: HEIGHT * 0.015,
                                marginRight: WIDTH * 0.03
                            }}>
                                <Image source={require('../../images/ic_playcirle.png')}
                                    style={{
                                        width: HEIGHT * 0.06,
                                        height: HEIGHT * 0.06,
                                        tintColor: 'black',
                                    }}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                color: 'black',
                                fontSize: HEIGHT * 0.02,
                            }}>Play</Text>
                        </View>
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
        height: HEIGHT * 0.4,
        marginBottom: HEIGHT * 0.03
    },

    view_title: {
        position: 'absolute',
        height: HEIGHT * 0.4,
        width: WIDTH,
        justifyContent: 'flex-end',
        paddingHorizontal: WIDTH * 0.06
    },

    title: {
        color: 'black',
        fontSize: HEIGHT * 0.045,
        fontWeight: 'bold',
    },

    image: {
        height: '100%',
        width: '100%',
    }
})

export default PlaylistDetailScreen