import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color, CONTANTS, } from '../utils';
import { NavigationContainer } from '@react-navigation/native'
import RadioStack from './RadioStack';
import OnDemandStack from './OnDemandStack';
import MostViewStack from './MostViewStack';
import FavoriteStack from './FavoriteStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator()

const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: Color.primary_color,
  tabBarActiveBackgroundColor:'white',
  tabBarInactiveBackgroundColor:'white',
  tabBarIcon: ({focused, color, size}) => {
    let screenName = route.name
    let iconName = ''
    switch(screenName){
      case CONTANTS.RADIO_STACK:
        iconName = 'headset-outline'
        break
      case CONTANTS.ONDEMAND_STACK:
        iconName = 'albums-outline'
        break
      case CONTANTS.SEARCH_STACK:
        iconName = 'search-circle-outline'
        break
      case CONTANTS.MOSTVIEW_STACK:
        iconName = 'thumbs-up-outline'
        break
      case CONTANTS.FAVORITE_STACK:
        iconName = 'heart-circle-outline'
        break
      default:
        break
    }
    return <Ionicons
      name={iconName} color={color} size={size}
    />
  },
})

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions = {screenOptions}
      >
        <Tab.Screen
          name = {CONTANTS.RADIO_STACK}
          component = {RadioStack}
        />
        <Tab.Screen
          name = {CONTANTS.ONDEMAND_STACK}
          component = {OnDemandStack}
        />
        <Tab.Screen
          name = {CONTANTS.SEARCH_STACK}
          component = {SearchStack}
        />
        <Tab.Screen
          name = {CONTANTS.MOSTVIEW_STACK}
          component = {MostViewStack}
        />
        <Tab.Screen
          name = {CONTANTS.FAVORITE_STACK}
          component = {FavoriteStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}