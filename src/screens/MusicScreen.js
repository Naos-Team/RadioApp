import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import { PlayerContext } from '../providers/PlayerProvider';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import TrackPlayer, { Event, useTrackPlayerEvents, usePlaybackState, useProgress, State } from 'react-native-track-player';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';

import { HEIGHT, WIDTH } from "../utils/Constant";

const MusicScreen = () => {

    const { bottomSheet, isExpand } = useContext(PlayerContext);
    const { position, duration } = useProgress();
    const [averageColor, setAverageColor] = useState()

    const playerState = usePlaybackState();

    const isPlaying = playerState === State.Playing;

    const initTrack = {
        url: 'https://tainhacmienphi.biz/get/song/api/349290',
        title: 'No song selected',
        artist: 'Unknown artist',
        artwork: 'https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d',
    }

    const [track, setTrack] = useState(initTrack);

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {

        if (event.type === Event.PlaybackError) {
            console.log(event.message)
        } else if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {

            console.log("Set song")

            const track = await TrackPlayer.getTrack(event.nextTrack);

            const result = await ImageColors.getColors(track.artwork, {
                fallback: '#228B22',
            });

            setAverageColor(result);

            setTrack(track);
        } else if (event.type === Event.PlaybackTrackChanged && event.nextTrack == null) {
            await TrackPlayer.skip(0);
            TrackPlayer.pause();
        }

    });

    const handleTogglePlay = () => {
        if (isPlaying) {
            TrackPlayer.pause();
        } else {
            TrackPlayer.play();
        }
    }

    const toMinuteFormat = (second) => {
        const minute = Math.floor(second / 60);
        let rest_seconds = second % 60;

        rest_seconds = rest_seconds < 10 ? "0" + rest_seconds : rest_seconds;

        return minute + ":" + rest_seconds;
    }

    const getAverageColor = () => {
        if (Platform.OS === 'ios') {
            return averageColor.quality;
        } else {
            return averageColor.average;
        }
    }

    const geCollapseColor = () => {
        if (Platform.OS === 'ios') {
            return averageColor.quality;
        } else {
            return averageColor.lightMuted;
        }
    }


    return (
        <View
            style={{
                backgroundColor: averageColor ? getAverageColor() : '#cccccc',
                height: HEIGHT,
                borderWidth: isExpand ? 1 : 0,
                borderTopColor: 'black'
            }}
        >
            <LinearGradient
                colors={[
                    'rgba(255, 255, 255, 0)',
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0.4)',
                    'rgba(255, 255, 255, 0.8)',
                    'rgba(255, 255, 255, 1)']}
                style={{
                    position: 'absolute',
                    height: HEIGHT,
                    width: '100%'
                }}
            />

            {isExpand ?
                <Pressable onPress={() => bottomSheet.current.snapTo(0)}>
                    <View style={{
                        ...styles.collapse_view,
                        backgroundColor: averageColor ? geCollapseColor() : 'white'
                    }}>
                        <Image
                            style={styles.image}
                            source={{ uri: track.artwork }}
                            resizeMode='cover'
                        />

                        <View style={styles.view_text}>
                            <Text style={{
                                color: 'black',
                                fontSize: HEIGHT * 0.02,
                                marginBottom: HEIGHT * 0.003,
                            }}
                                ellipsizeMode='tail'
                                numberOfLines={1}
                            >
                                {track.title}
                            </Text>

                            <Text style={{
                                color: '#333333',
                                fontSize: HEIGHT * 0.016,
                            }}>
                                {track.artist}
                            </Text>
                        </View>

                        {playerState === State.Buffering || playerState === State.Connecting ?
                            <View style={{
                                height: HEIGHT * 0.045,
                                width: HEIGHT * 0.045,
                                borderWidth: HEIGHT * 0.0015,
                                borderColor: 'black',
                                borderRadius: HEIGHT * 0.9,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ActivityIndicator
                                    size={HEIGHT * 0.025}
                                    color='black'
                                />
                            </View>
                            :
                            <TouchableOpacity onPress={handleTogglePlay}>
                                <Image
                                    source={isPlaying ? require('../images/ic_pausebutton.png') : require('../images/ic_playbutton.png')}
                                    style={{
                                        height: HEIGHT * 0.045,
                                        width: HEIGHT * 0.045,
                                        tintColor: 'black'
                                    }}
                                />
                            </TouchableOpacity>
                        }


                    </View>
                </Pressable>
                :
                <View style={{
                    height: HEIGHT * 0.09,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingRight: WIDTH * 0.05
                }}>
                    <TouchableOpacity onPress={() => bottomSheet.current.snapTo(1)}>
                        <Icon name="chevron-down" color='#333333' size={HEIGHT * 0.05} />
                    </TouchableOpacity>

                </View>
            }

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    style={styles.expand_image}
                    source={{ uri: track.artwork }}
                    resizeMode='cover'
                />
            </View>

            <View style={{
                flex: 1,
            }}>
                <View style={styles.view_text_expand}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: HEIGHT * 0.035,
                    }}
                        numberOfLines={2}>
                        {track.title}
                    </Text>
                    <Text style={{
                        color: '#191919',
                        fontSize: HEIGHT * 0.023
                    }}>
                        {track.artist}
                    </Text>
                </View>

                <View style={styles.view_slider}>

                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        value={position / duration ? position / duration : 0}
                        minimumTrackTintColor="#333333"
                        thumbTintColor="#333333"
                        maximumTrackTintColor={'#333333'}
                        onSlidingComplete={async value => TrackPlayer.seekTo(value * duration)}
                    />

                    <View style={{
                        width: WIDTH * 0.82,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            color: '#333333',
                            fontSize: HEIGHT * 0.017
                        }}>{toMinuteFormat(Math.floor(position))}</Text>
                        <Text style={{
                            color: '#333333',
                            fontSize: HEIGHT * 0.017
                        }}>{toMinuteFormat(Math.floor(duration))}</Text>
                    </View>
                </View>

                <View style={styles.view_controller}>
                    <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                        <Image
                            source={require('../images/ic_backward.png')}
                            style={{
                                tintColor: '#333333',
                                height: HEIGHT * 0.05,
                                width: HEIGHT * 0.05
                            }}
                        />

                    </TouchableOpacity>

                    {playerState === State.Buffering || playerState === State.Connecting ?
                        <View style={{
                            height: HEIGHT * 0.08,
                            width: HEIGHT * 0.08,
                            backgroundColor: '#333333',
                            borderRadius: HEIGHT * 0.16,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ActivityIndicator
                                size={HEIGHT * 0.05}
                                color='white'
                            />
                        </View>
                        :
                        <TouchableOpacity onPress={() => handleTogglePlay()}>
                            <Image
                                source={isPlaying ? require('../images/ic_pausecirle.png') : require('../images/ic_playcirle.png')}
                                style={{
                                    tintColor: '#333333',
                                    height: HEIGHT * 0.08,
                                    width: HEIGHT * 0.08
                                }}
                            />

                        </TouchableOpacity>
                    }



                    <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                        <Image
                            source={require('../images/ic_forward.png')}
                            style={{
                                tintColor: '#333333',
                                height: HEIGHT * 0.05,
                                width: HEIGHT * 0.05
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    collapse_view: {
        flexDirection: 'row',
        alignItems: 'center',
        height: HEIGHT * 0.09,
        paddingHorizontal: WIDTH * 0.07
    },

    expand_image: {
        height: HEIGHT * 0.4,
        width: HEIGHT * 0.4,
        borderWidth: HEIGHT * 0.002,
        borderColor: 'black'
    },

    image: {
        height: HEIGHT * 0.065,
        width: HEIGHT * 0.065,
        borderRadius: HEIGHT * 0.01,
        borderWidth: 1,
        borderColor: 'black'
    },

    view_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: WIDTH * 0.04,
        paddingRight: WIDTH * 0.06
    },

    view_text_expand: {
        position: 'absolute',
        top: HEIGHT * 0.05,
        marginHorizontal: WIDTH * 0.08
    },

    view_controller: {
        position: 'absolute',
        width: WIDTH,
        top: HEIGHT * 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    slider: {
        width: WIDTH * 0.9,
    },
    view_slider: {
        position: 'absolute',
        top: HEIGHT * 0.2,
        width: WIDTH,
        alignItems: 'center',
    }
})

export default MusicScreen