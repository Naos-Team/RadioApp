import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef, memo } from 'react'
import { PLAYLISTDETAIL_SCREEN } from '../utils/Constant'
import { Color, FontSize } from '../utils'
import { WIDTH } from '../utils/Constant'
import LinearGradient from 'react-native-linear-gradient'
import SlideShowItem from './SlideShowItem'

const SlideShow = (props) => {

    const { items, navigation } = props

    const [selected, setSelected] = useState(0)

    const scroll = useRef()
    const setNextPage = useRef()

    useEffect(() => {
        const w = WIDTH * 4 / 5 - 25 + 10
        setNextPage.current = setTimeout(() => {
            const next_page = (selected === (items.length - 1)) ? 0 : (w * (selected) + w - 1 / 10 * WIDTH + 5 + WIDTH / 10)
            scroll.current.scrollTo({ x: next_page, y: 0, animated: true })
        }, 3000);
        return () => clearTimeout(setNextPage.current)
    }, [selected])

    const onChange = ({ nativeEvent }) => {
        const w = WIDTH * 4 / 5 - 25 + 10
        let slide = nativeEvent.contentOffset.x / (w)
        slide = (slide < 0) ? 0 : Math.floor(slide)
        slide = (slide === items.length) ? (items.length - 1) - 1 : Math.floor(slide)
        setSelected(slide)
    }

    return (
        <View style={style_SlideShow.slide}>
            <ScrollView
                pagingEnabled={true}
                ref={scroll}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                onScroll={onChange}
                snapToInterval={1}
            >
                {
                    items.map((image, index) => (

                        <TouchableOpacity 
                            onPress={() => {
                                navigation.navigate(PLAYLISTDETAIL_SCREEN, {
                                    item: image
                                });
                                key={index}
                                // console.log("AAAAAA", image)
                            }}
                            style = {{justifyContent:'center'}}
                        >
                            <SlideShowItem
                                key={index}
                                item={image}
                                selected={(index === selected)}
                                isFirst={(index === 0)}
                                isLast={(index === items.length - 1)}
                            />
                        </TouchableOpacity>


                    ))
                }
            </ScrollView>
            {/* <View style={style_SlideShow.circleindicator}>
        {
          items.map((item, index) => (
            <Text 
              style={style_SlideShow.circleindicator_point }
              key = {index}
              onPress = {() => {
                scroll.current.scrollTo({ x: WIDTH * index, y: 0, animated: true })
              }}
            >
              {(index === selected) ? '⚪' : '⚫'}
            </Text>
          ))
        }
      </View> */}
        </View>
    )
}

const style_SlideShow = StyleSheet.create({
    slide: {
        width: WIDTH,
        height: WIDTH * 3 / 5,
        marginTop: 0,
        marginBottom: 2
    },
    circleindicator: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 2,
        alignSelf: 'center'
    },
    circleindicator_point: {
        padding: 2,
        color: 'white',
        fontSize: FontSize.small - 2
    },
})

export default memo(SlideShow)