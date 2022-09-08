import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontSize, Color} from '../utils';
import { HEIGHT } from '../utils/Constant';

const Toolbar = (props) => {
  const {title, left_icon, right_icon, left_Press, right_Press} = props
  return (
    <View style = {style_Toolbar.toolbar}>
     {left_icon && <Ionicons
        name={left_icon}
        size={35}
        onPress = {left_Press}
        color = 'black'
        style = {{
          ...style_Toolbar.icon,
          left: 0
        }}
      />}
      <Text
        style = {style_Toolbar.tittle}
        numberOfLines={1}
      >
        {title}
      </Text>
    </View>
  )
}

const style_Toolbar = StyleSheet.create({
  toolbar:{
    height:HEIGHT * 1/14,
    flexDirection:'row',
    alignItems:'center',
  },
  icon:{
    padding: 2,
    position: 'absolute',
  },
  tittle:{
    flex: 1,
    textAlign:'left',
    fontSize: FontSize.title +5,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 40,
  }
})

export default Toolbar