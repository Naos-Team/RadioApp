import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, CONTANTS, FontSize } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';

const CountryListItem = (props) => {

  const {country, onClick} = props

  return (
    <TouchableOpacity 
      style = {style_Country_Item.parent}
      activeOpacity = {0.9}
      onPress = {onClick}
    >
      <Image
        style = {style_Country_Item.thumbnail}
        source = {{uri: country.thumbnail}}
      />
      <View style = {style_Country_Item.info}>
        <View style = {{
          width: CONTANTS.WIDTH/2 - 10,
        }}>
          <Text
            style = {style_Country_Item.name}
          >
            {country.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style_Country_Item = StyleSheet.create({
  parent:{
    margin: 5,
  },
  thumbnail:{
    marginVertical: 2,
    height: CONTANTS.WIDTH/2*3/4 - 10,
    width: CONTANTS.WIDTH/2 - 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.border_color
  },
  info:{
    flexDirection: 'row',
  },
  name:{
    color: 'black',
    fontSize: FontSize.medium,
    textAlign:'center'
  }
})

export default CountryListItem