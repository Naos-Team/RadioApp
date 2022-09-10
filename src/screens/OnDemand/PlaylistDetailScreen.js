import React, { useEffect, useReducer, useState } from 'react'
import {
    SafeAreaView, ScrollView, View, Image,
    ActivityIndicator, Text, StyleSheet,
    TouchableOpacity
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';
import { makeRequest } from '../../utils/Methods';
import { API_URL } from '../../utils/Constant';
import OnDemandItem from '../../components/OnDemandItem';
import { HEIGHT, WIDTH } from '../../utils/Constant'

const PlaylistDetailScreen = ({ navigation, route }) => {

    const { item } = route.params;
    const [averageColor, setAverageColor] = useState('black');
    const [songs, setSongs] = useState([]);
    const [progress, setProgress] = useState(true);

    const getMainColor = async () => {
        const result = await ImageColors.getColors(item.thumbnail, {
            fallback: 'black',
        });

        console.log(result.darkMuted);

        setAverageColor(result.muted);

    }

    const fetchSongs = async () => {

        const url = API_URL + 'radio/getOnDemandByPlaylistID.php?playlist_id=' + item.id;
        const res = await makeRequest(url, 'GET', {});

        console.log("Songs:", res.data);

        setProgress(false);
        setSongs(res.data);
    }

    useEffect(() => {
        getMainColor();
        fetchSongs();
    }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>

                <View style={styles.view_image}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.thumbnail }}
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
                            source={{ uri: item.thumbnail }}
                            style={{
                                position: 'absolute',
                                top: '13%',
                                height: HEIGHT * 0.28,
                                width: HEIGHT * 0.28,
                                borderRadius: HEIGHT * 0.02,
                                marginBottom: HEIGHT * 0.03
                            }}
                        />



                        <View style={{
                            position: 'absolute',
                            bottom: '5%',
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
                                >{item.name}</Text>
                                <Text style={{
                                    color: '#191919',
                                    fontSize: HEIGHT * 0.023,
                                }}>{item.total} tracks available</Text>
                            </View>

                            <TouchableOpacity style={{
                            }}>
                                <Image source={require('../../images/ic_playcirle.png')}
                                    resizeMode='center'
                                    style={{
                                        width: HEIGHT * 0.065,
                                        height: HEIGHT * 0.065,
                                        tintColor: averageColor,
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                    </View>


                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            position: 'absolute',
                            height: HEIGHT * 0.055,
                            width: HEIGHT * 0.055,
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

                {songs.length > 0 &&
                    <>
                        {songs.map((song, index) => {
                            return <OnDemandItem
                                key={song.id}
                                item={song} />
                        })}
                    </>
                }
            </ScrollView>

            {progress &&
                <View style={{
                    width: WIDTH,
                    position: 'absolute',
                    bottom: HEIGHT * 0.2,
                    alignItems: 'center'
                }}>
                    <ActivityIndicator
                        size={HEIGHT * 0.06}
                        color='black'
                    />
                </View>
            }


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
        color: '#191919',
        fontSize: HEIGHT * 0.04,
        fontWeight: 'bold',
    },

    image: {
        height: '100%',
        width: '100%',
    }
})

export default PlaylistDetailScreen