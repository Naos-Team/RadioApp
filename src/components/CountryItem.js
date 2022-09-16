import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, FontSize } from '../utils'

const CountryItem = (props) => {

  const {country, onClick} = props

  return (
    <TouchableOpacity 
      style = {style_CountryItem.parent}
      onPress = {onClick}
    >
      <Image
        source={{
          uri: country.thumbnail ??
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-ViR2AnLGyYY2jkr0bGfEgT34E2MRm71oQ&usqp=CAU'
        }}
        style = {style_CountryItem.thumbnail}
      />
      <Text style = {style_CountryItem.name}>
        {country.name}
      </Text>
    </TouchableOpacity>
  )
}

const style_CountryItem = StyleSheet.create({
  parent:{
    margin: 2,
    marginLeft: 5,
    marginHorizontal: 15,
    alignContent:'center'
  },
  thumbnail:{
    marginVertical: 2,
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Color.border_color,
    marginBottom: 5
  },
  name:{
    color: 'black',
    fontSize: FontSize.medium ,
    width: 90,
    marginHorizontal: 5,
    textAlign:'center'
  },
}) 

export default CountryItem