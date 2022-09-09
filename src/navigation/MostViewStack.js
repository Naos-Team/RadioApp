import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MostViewScreen } from '../screens';
const Stack = createNativeStackNavigator();
const MostViewStack = () => {
  return (
      <Stack.Navigator
          initialRouteName={'MostView'}
          screenOptions={{
              headerShown: false
          }}
      >
          <Stack.Screen name="MostView" component={MostViewScreen} />
      </Stack.Navigator>
  )
}

export default MostViewStack