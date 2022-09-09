import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, CONTANTS, FontSize } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';

const RadioTrendingItem = (props) => {

  const {radio, onClick} = props

  const for_list_scr = props.for_list_scr ?? false

  return (
    <TouchableOpacity 
      style = {{
        ...style_Trend_Item.parent,
        margin:(for_list_scr) ? 5 : 0,
      }}
      activeOpacity = {0.9}
      onPress = {() => onClick(radio)}
    >
      <Image
        style = {{
          ...style_Trend_Item.thumbnail,
          height: (for_list_scr) ? CONTANTS.WIDTH/2 - 10 : 120,
          width: (for_list_scr) ? CONTANTS.WIDTH/2 - 10 : 120,
        }}
        source = {{uri: radio.thumbnail}}
      />
      <View style = {style_Trend_Item.info}>
        <View style = {{
          width: (for_list_scr) ? CONTANTS.WIDTH/2 - 10 - 40 : 85,
        }}>
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
          size = {30}
          color = {(radio.is_favorite) ? '#0c0626' : 'black'}
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.border_color
  },
  info:{
    flexDirection: 'row',
    marginHorizontal: 5
  },
  name:{
    color: 'black',
    fontSize: FontSize.medium - 2
  },
  country:{
    color: Color.text_second,
    fontSize: FontSize.medium - 3
  }
})

export default RadioTrendingItem