import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ListRadioScreen, RadioCountryScreen, RadioScreen, SearchScreen} from '../screens'

const Stack = createNativeStackNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
})

const RadioStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={'RadioScreen'}
      screenOptions = {screenOptions}
    >
      <Stack.Screen
        name= {'RadioScreen'}
        component = {RadioScreen}
      />
      <Stack.Screen
        name= {'RadioListScreen'}
        component = {ListRadioScreen}
      />
      <Stack.Screen
        name= {'RadioCountryScreen'}
        component = {RadioCountryScreen}
      />
    </Stack.Navigator>
  )
}

export default RadioStack