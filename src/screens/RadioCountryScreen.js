import { View, Text, FlatList, RefreshControl, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CountryItem, CountryListItem, RadioTrendingItem, Toolbar } from '../components'
import { Methods } from '../utils'
import { playSingleSong } from '../utils/Methods'

const RadioCountryScreen = (props) => {

  const [state, setState] = useState({
    reload: false,
    radios: []
  })

  const onRadioClick = (radio) => {
    playSingleSong(radio)
  }

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const item = route.params.item

  const for_language = route.params.for_language

  useEffect(() => {
    load_radios()
  }, [])

  const load_radios = async() =>{
    const respone = (for_language) ? 
      await Methods.get_Radio_By_Language(item.id) :
      await Methods.get_Radio_By_Country(item.id)
    setState({
      reload: false,
      radios: respone
    })
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Toolbar
        title = {item.name}
        left_icon = {'chevron-back-outline'}
        left_Press = {() => goBack()}
      />
      <FlatList
        data = {state.radios}
        numColumns={2}
        renderItem = {({item, index}) => (
            <RadioTrendingItem
              radio = {item}
              onClick = {onRadioClick}
              key = {item.id}
              for_list_scr = {true}
            />
        )}
        refreshControl = {
          <RefreshControl
            refreshing = {state.reload}
            onRefresh = {() => {
              setState({
                reload: true,
                radios: []
              })
              load_radios()
            }}
          />
        }
      />
    </SafeAreaView>
  )
}

const style_RadioCountryScr = StyleSheet.create({

})

export default RadioCountryScreen