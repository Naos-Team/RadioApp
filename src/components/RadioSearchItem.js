import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, CONTANTS, FontSize } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';
import BorderItem from './BorderItem';

const RadioSearchItem = (props) => {

  const {radio, onClick} = props

  return (
    <View>
      <BorderItem/>
      <TouchableOpacity 
        style = {{
          ...style_Search_Item.parent,
        }}
        activeOpacity = {0.9}
        onPress = {() => onClick(radio)}
      >
        <Image
          style = {style_Search_Item.thumbnail}
          source = {{uri: radio.thumbnail}}
        />
        <View style = {style_Search_Item.info}>
          <View style = {style_Search_Item.info_text}>
            <Text
              style = {style_Search_Item.name}
            >
              {radio.name}
            </Text>
            <Text
              style = {style_Search_Item.country}
            >
              Country: {radio.country}
            </Text>
            <Text
              style = {style_Search_Item.country}
            >
              Language: {radio.language}
            </Text>
          </View>
        </View>
        <Ionicons
          name = {(radio.is_favorite) ? 'heart' : 'heart-outline'}
          size = {35}
          color = {(radio.is_favorite) ? 'red' : 'black'}
          onPress = {() => alert(radio.name)}
        />
      </TouchableOpacity>
    </View>
  )
}

const style_Search_Item = StyleSheet.create({
  parent:{
    marginVertical: 2,
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  thumbnail:{
    marginVertical: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.border_color,
    height: 80,
    width: 80
  },
  info:{
    flexDirection: 'row',
    marginHorizontal: 5,
    flex: 1,
  },
  info_text:{
    flex: 1,
    justifyContent: 'center'
  },
  name:{
    color: 'black',
    fontSize: FontSize.medium - 2,
  },
  country:{
    color: Color.text_second,
    fontSize: FontSize.medium - 3
  }
})

export default RadioSearchItem