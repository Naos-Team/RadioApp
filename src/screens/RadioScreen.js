import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { BorderItem, SlideShow, Toolbar } from '../components'

const RadioScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Toolbar
          title = 'Home'
          left_icon = 'reorder-three-outline'
          left_Press = {() => {}}
          right_icon = 'search-outline'
          right_Press = {() => {}}
        />
        <SlideShow
          images = {[
            'https://watermark.lovepik.com/photo/20211122/large/lovepik-retro-radio-picture_500673248.jpg',
            'https://thumbs.dreamstime.com/b/de-oude-boombox-radio-van-retro-uit-jaren-jaar-oud-met-een-oogsttoon-style-toon-158831482.jpg'
          ]}
        />
        <BorderItem/>
      </ScrollView>
    </SafeAreaView>
  )
}

const style_RadioScr = StyleSheet.create({

})

export default RadioScreen