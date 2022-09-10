import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { HEIGHT, WIDTH } from '../utils/Constant';

const OnDemandItem = ({ item }) => {

    const calculate_views = (views) => {
        let temp = views + ""
        if (parseInt(views) >= 1000000000) {
            temp = (views / 1000000000).toFixed(1) + "b"
            views = views / 1000000000
        }
        if (parseInt(views) >= 1000000) {
            temp = (views / 1000000).toFixed(1) + "m"
            views = views / 1000000
        }
        if (parseInt(views) >= 1000) {
            temp = (views / 1000).toFixed(1) + "k"
            views = views / 1000
        }
        return temp
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { 
                console.log("Clicker song:", item)
            }}
        >

            <Image
                style={styles.image}
                source={{ uri: item.thumbnail }}
                resizeMode='cover'
            />

            <View style={styles.view_text}>
                <Text style={{
                    color: 'black',
                    fontSize: HEIGHT * 0.023,
                    marginBottom: HEIGHT * 0.005,
                }}
                    ellipsizeMode='tail'
                    numberOfLines={1}
                >
                    {item.name}
                </Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon name='eye' color='black' size={HEIGHT * 0.018} />
                    <Text style={{
                        color: '#191919',
                        fontSize: HEIGHT * 0.018,
                        marginLeft: WIDTH * 0.01
                    }}>
                        {calculate_views(item.views)}
                    </Text>
                </View>


            </View>

            <TouchableOpacity>
                <Icon name={item.is_favorite ? 'heart' : 'heart-outline'} color='black' size={HEIGHT * 0.045} />
            </TouchableOpacity>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: HEIGHT * 0.08,
        marginBottom: HEIGHT * 0.022,
        marginHorizontal: WIDTH * 0.055
    },

    image: {
        height: HEIGHT * 0.085,
        width: HEIGHT * 0.085,
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


})

export default OnDemandItem;