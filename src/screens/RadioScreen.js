import { View, Text, ScrollView, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { BorderItem, RadioTrendingItem, SlideShow, Toolbar } from '../components'
import { FontSize } from '../utils'

const RadioScreen = () => {

  const onDemand = [
    {
      "id": "11",
      "name": "Backstage Radio Network",
      "url": "https://cbtv.out.airtime.pro:8000/cbtv_a",
      "thumbnail": "https://freerangestock.com/sample/76631/music-hits-indicates-sound-track-and-audio.jpg",
      "country_id": "5",
      "lang_id": "3",
      "type": "1",
      "views": "122",
      "is_trending": "0",
      "status": "1",
      "country": "updated lang",
      "is_favorite": true
    },
    {
      "id": "10",
      "name": "Radio Index 96 fm",
      "url": "https://stream.wzielonej.pl/radio/8000/1",
      "thumbnail": "https://sites.google.com/site/tieraneeransomcwdsaportfolio/_/rsrc/1469721898276/projects/project-1/circle-made-of-music-instruments_23-2147509304.jpg?height=320&width=320",
      "country_id": "3",
      "lang_id": "4",
      "type": "1",
      "views": "887",
      "is_trending": "0",
      "status": "1",
      "country": "Viet Nam",
      "is_favorite": false
    },
    {
      "id": "8",
      "name": "UGNJAMZ",
      "url": "https://ice31.securenetsystems.net/UGNR",
      "thumbnail": "https://beleaderly.com/wp-content/uploads/2015/07/15-songs-for-your-leadership-playlist_opt.jpg",
      "country_id": "1",
      "lang_id": "1",
      "type": "1",
      "views": "2121",
      "is_trending": "0",
      "status": "1",
      "country": "America",
      "is_favorite": false
    },
    {
      "id": "7",
      "name": "OVA DRIVE RADIO",
      "url": "https://listen.openstream.co/4119/audio",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-s9JcEQHjo7cizqv3HFyx-ydJeSbUILcj5jHDhvIrP5kdnp20fStKKKv6oI52HwTYs-s&usqp=CAU",
      "country_id": "1",
      "lang_id": "1",
      "type": "1",
      "views": "1999",
      "is_trending": "1",
      "status": "1",
      "country": "America",
      "is_favorite": true
    },
    {
      "id": "4",
      "name": "Surf Roots Radio",
      "url": "https://edge3.peta.live365.net/b00888_128mp3",
      "thumbnail": "https://hoigiasudanang.com/wp-content/uploads/2022/03/song-1.jpg",
      "country_id": "5",
      "lang_id": "3",
      "type": "1",
      "views": "1651",
      "is_trending": "1",
      "status": "1",
      "country": "updated lang",
      "is_favorite": false
    },
    {
      "id": "3",
      "name": "Dream 102.9 FM",
      "url": "http://s3.voscast.com:9458/stream/1/",
      "thumbnail": "https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg",
      "country_id": "4",
      "lang_id": "1",
      "type": "1",
      "views": "1212",
      "is_trending": "0",
      "status": "1",
      "country": "Australia",
      "is_favorite": false
    },
    {
      "id": "2",
      "name": "delta radio HIP HOP",
      "url": "https://streams.deltaradio.de/hiphop/aac-64/radiode/|Kiel",
      "thumbnail": "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      "country_id": "1",
      "lang_id": "1",
      "type": "1",
      "views": "1000",
      "is_trending": "1",
      "status": "1",
      "country": "America",
      "is_favorite": false
    },
    {
      "id": "1",
      "name": "yard vibez radio 98.5",
      "url": "http://67.82.10.145:8001/%3Bstream.mp3",
      "thumbnail": "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
      "country_id": "1",
      "lang_id": "1",
      "type": "1",
      "views": "1000",
      "is_trending": "1",
      "status": "1",
      "country": "America",
      "is_favorite": true
    }
  ]

  const onRadioClick = useCallback((radio) => {
    
  }, [])

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
        <Text 
          onPress={() => {alert('Fetured')}}
          style = {style_RadioScr.text_List}
        >
          Fetured
        </Text>
        <FlatList
          data = {onDemand}
          horizontal = {true}
          renderItem = {({item}) => (
            <RadioTrendingItem
              radio = {item}
              onClick = {onRadioClick}
              key = {item.id}
            />
          )}
          showsHorizontalScrollIndicator = {false}
          style = {{paddingHorizontal: 5,}}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const style_RadioScr = StyleSheet.create({
  text_List: {
    fontSize: FontSize.title + 5,
    color: 'black',
    margin: 5,
    marginLeft: 10
  },
})

export default RadioScreen