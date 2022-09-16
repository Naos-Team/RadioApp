import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { PLAYLISTDETAIL_SCREEN } from '../utils/Constant'
import { WIDTH } from '../utils/Constant'
import LinearGradient from 'react-native-linear-gradient'
import { FontSize } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';

const SlideShowItem = (props) => {

    const { item, selected, isFirst, isLast } = props

    const size_custom = (selected) ? 0 : 25

    return (
        <View
            style={{
                ...style_SlideShow_item(size_custom).parent,
                marginStart: (isFirst) ? (WIDTH / 10 + 5) : 5,
                marginEnd: (isLast) ? (WIDTH / 10 + 5) : 5
            }}

        >
            <Image
                source={{ uri: item.thumbnail }}
                style={style_SlideShow_item(size_custom).image}
            />
            <LinearGradient
                colors={['#FFFFFF00', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                style={style_SlideShow_item(size_custom).linearGradient}
            />
            <Text style={style_SlideShow_item(size_custom).name}>
                {item.name}
            </Text>
            <View
                style={{
                    ...style_SlideShow_item(size_custom).play_btn_background,
                    backgroundColor: (selected) ? 'rgba(0,0,0,0)' : 'rgba(255, 255, 255, 0.6)'
                }}
            >
                <View style={style_SlideShow_item(size_custom).play_btn}>
                    <Ionicons
                        name='play'
                        size={25}
                        color={'white'}
                        style={{ marginLeft: 3 }}
                    />
                </View>
            </View>
        </View>
    )
}

const style_SlideShow_item = (size_custom) => StyleSheet.create({
    parent: {
        width: WIDTH * 4 / 5 - size_custom,
        height: WIDTH * 3 / 5 - size_custom,
        marginHorizontal: 5,
        alignSelf: 'center',
    },
    image: {
        width: WIDTH * 4 / 5 - size_custom,
        height: WIDTH * 3 / 5 - size_custom,
        resizeMode: 'cover',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    linearGradient: {
        width: WIDTH * 4 / 5 - size_custom,
        height: WIDTH * 3 / 5 - size_custom,
        position: 'absolute',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        top: 0,
        right: 0
    },
    name: {
        position: 'absolute',
        fontSize: FontSize.medium,
        color: 'white',
        bottom: 5,
        width: WIDTH * 4 / 5 - size_custom,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    play_btn_background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    play_btn: {
        width: WIDTH * 1 / 10 + 5,
        height: WIDTH * 1 / 10 + 5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SlideShowItem