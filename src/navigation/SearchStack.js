import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SearchScreen} from '../screens'

const Stack = createNativeStackNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
})

const SearchStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={'SearchScreen'}
      screenOptions = {screenOptions}
    >
      <Stack.Screen
        name= {'SearchScreen'}
        component = {SearchScreen}
      />
    </Stack.Navigator>
  )
}

export default SearchStack