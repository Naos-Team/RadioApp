import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, FontSize } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';

const RadioTrendingItem = (props) => {

  const {radio, onClick} = props

  return (
    <TouchableOpacity 
      style = {style_Trend_Item.parent}
      activeOpacity = {0.9}
    >
      <Image
        style = {style_Trend_Item.thumbnail}
        source = {{uri: radio.thumbnail}}
      />
      <View style = {style_Trend_Item.info}>
        <View style = {style_Trend_Item.text_info}>
          <Text
            style = {style_Trend_Item.name}
          >
            {radio.name}
          </Text>
          <Text
            style = {style_Trend_Item.country}
          >
            {radio.country}
          </Text>
        </View>
        <Ionicons
          name = {(radio.is_favorite) ? 'heart' : 'heart-outline'}
          size = {35}
          color = {(radio.is_favorite) ? 'red' : 'black'}
          onPress = {() => alert(radio.name)}
        />
      </View>
    </TouchableOpacity>
  )
}

const style_Trend_Item = StyleSheet.create({
  parent:{
    margin: 2,
    marginLeft: 5,
  },
  thumbnail:{
    marginVertical: 2,
    height: 135,
    width: 135,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.border_color
  },
  info:{
    flexDirection: 'row',
    marginHorizontal: 5
  },
  text_info:{
    width: 95,
  },
  name:{
    color: 'black',
    fontSize: FontSize.medium - 1
  },
  country:{
    color: Color.text_second,
    fontSize: FontSize.medium - 2
  }
})

export default RadioTrendingItem