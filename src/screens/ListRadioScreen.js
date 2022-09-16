import { View, Text, FlatList, RefreshControl, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CountryItem, CountryListItem, RadioTrendingItem, Toolbar } from '../components'
import { Methods } from '../utils'
import { playSingleSong } from '../utils/Methods'

const ListRadioScreen = (props) => {

  const [state, setState] = useState({
    for_language: false,
    for_Radio: false,
    reload: false,
    radios: [],
  })

  const onRadioClick = (radio) => {
    playSingleSong(radio)
  }

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const title = route.params.title

  useEffect(() => {
    load_radios()
  }, [])

  const load_radios = async() =>{
    let for_language
    let respone
    let for_Radio_temp = true
    switch (title) {
      case 'Trending':
        for_language = false
        respone = await Methods.get_Trending_Radio(1, 100, -1)
        break;
      case 'Latest':
        for_language = false
        respone = await Methods.get_All_Radio(1, 100, -1)
        break;
      case 'Country':
        for_language = false
        for_Radio_temp = false 
        respone = await Methods.get_Country()
        break;
      case 'Language':
        for_language = true
        for_Radio_temp = false 
        respone = await Methods.get_Language()
        break;
      default:
        break;
    }
    setState({
      for_language: for_language,
      for_Radio: for_Radio_temp,
      reload: false,
      datas: respone
    })
  }
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Toolbar
        title = {title}
        left_icon = {'chevron-back-outline'}
        left_Press = {() => goBack()}
      />
      <FlatList
        data = {state.datas}
        numColumns={2}
        renderItem = {({item, index}) => (
            (state.for_Radio) ? 
            <RadioTrendingItem
              radio = {item}
              onClick = {onRadioClick}
              key = {item.id}
              for_list_scr = {true}
            /> :
            <CountryListItem
              country = {item}
              key = {item.id}
              onClick = {() => {
                navigate('RadioCountryScreen', {item: item, for_language: state.for_language})
              }}
            />
        )}
        refreshControl = {
          <RefreshControl
            refreshing = {state.reload}
            onRefresh = {() => {
              setState({
                for_Radio: state.for_Radio,
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

export default ListRadioScreen