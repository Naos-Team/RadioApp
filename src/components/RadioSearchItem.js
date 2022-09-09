import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { Color, CONTANTS, FontSize } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';
import BorderItem from './BorderItem';

const RadioSearchItem = (props) => {

  const {radio, onClick} = props

  const calculate_views = (views) => {
    let temp = views + ""
    if(parseInt(views) >= 1000000000) {
      temp = (views/1000000000).toFixed(1) + "b"
      views = views/1000000000
    }
    if(parseInt(views) >= 1000000) {
      temp = (views/1000000).toFixed(1) + "m"
      views = views/1000000
    }
    if(parseInt(views) >= 1000) {
      temp = (views/1000).toFixed(1) + "k"
      views = views/1000
    }
    return temp
  }

  return (
    <View>
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
              {radio.country}
            </Text>
            <Text
              style = {style_Search_Item.country}
            >
              {radio.language}
            </Text>
          </View>
        </View>
        <View style = {style_Search_Item.views}>
          <Ionicons
            name = {(radio.is_favorite) ? 'heart' : 'heart-outline'}
            size = {35}
            color = {(radio.is_favorite) ? '#0c0626' : 'black'}
            onPress = {() => alert(radio.name)}
          />
          <Text>
            {calculate_views(radio.views)}
          </Text>
          <Ionicons
            name = {'eye-outline'}
            size = {17}
            color = {'#0c0626'}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const style_Search_Item = StyleSheet.create({
  parent:{
    marginVertical: 5,
    flexDirection: 'row',
    paddingHorizontal: 10
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
    justifyContent: 'center',
    marginLeft: 10
  },
  name:{
    color: 'black',
    fontSize: FontSize.medium - 2,
  },
  country:{
    color: Color.text_second,
    fontSize: FontSize.medium - 3
  },
  views:{
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default RadioSearchItem