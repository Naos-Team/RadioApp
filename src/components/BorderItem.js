import { View } from 'react-native'
import React from 'react'
import { Color } from '../utils'

const BorderItem = () => {
  return (
    <View 
        style={{
          width:'100%', 
          height:1, 
          backgroundColor: Color.border_color
        }}
    />
  )
}

export default BorderItem