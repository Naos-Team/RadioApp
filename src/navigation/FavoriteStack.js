import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoriteScreen } from '../screens';
const Stack = createNativeStackNavigator();
const FavoriteStack = () => {
  return (
      <Stack.Navigator
          initialRouteName={'FavoriteScreen'}
          screenOptions={{
              headerShown: false
          }}
      >
          <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      </Stack.Navigator>
  )
}

export default FavoriteStack