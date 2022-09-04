import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color, CONTANTS, FontSize, Methods } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import { RadioSearchItem, RadioTrendingItem, Toolbar } from '../components';

const SearchScreen = (props) => {
  
  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const [showOptions, setShowOptions] = useState(false)

  const [result, setResult] = useState([])

  const [stateInit, setStateInit] = useState({
    country: [
      {
        "id": "-1",
        "name": "All",
      }
    ],
    language: [
      {
        "id": "-1",
        "name": "All",
      }
    ]
  })

  const [stateSearch, setStateSearch] = useState({
    text_search: "",
    country_id: "-1",
    lang_id: "-1",
    value_Views: "0",
    unit_Views: 1000,
    is_trending: -1
  })

  const min_Views_unit = [
    {
      value: 1000,
      label: 'Thousand'
    },
    {
      value: 1000000,
      label: 'Milion'
    },
    {
      value: 1000000000,
      label: 'Billion'
    },
  ]

  const is_trending = [
    {
      value: -1,
      label: 'All'
    },
    {
      value: 0,
      label: 'Not Trending'
    },
    {
      value: 1,
      label: 'Trending'
    },
  ]

  useEffect(() => {
    const load_data = async() => {
      const resp_country = await Methods.get_Country()
      const resp_lang = await Methods.get_Language()
      setStateInit({
        country:[
          {
            "id": "-1",
            "name": "All",
          },
          ...resp_country
        ],
        language: [
          {
            "id": "-1",
            "name": "All",
          },
          ...resp_lang
        ]
      })
    }
    load_data()
  } ,[])

  const search_result = async() => {
    try {
      const views = parseInt(stateSearch.value_Views)*stateSearch.unit_Views
      const resp_search = await Methods.get_Search_Result(
        1, 
        100,
        stateSearch.text_search,
        stateSearch.country_id, 
        stateSearch.lang_id, 
        views, 
        stateSearch.is_trending, 
        -1)
      setResult(resp_search)
    } catch (error) {
      console.log(error)
      alert('Wrong format!')
    }
  }

  return (
    <SafeAreaView style = {{flex: 1}}>
      <Toolbar
        title = 'Search'
        left_icon = {'chevron-back-outline'}
        left_Press = {() => goBack()}
      />
      <View style = {style_Search_Scr.search_view}>
        <Ionicons
          style={{position:'absolute', top:10, left:10, height:30, width:30, tintColor:'black'}}
          name = {'search-outline'}
          color = {'black'}
          size = {27}
        />
        <TextInput
          placeholder='Search'
          style={style_Search_Scr.search_input}
          autoCorrect={false}
          placeholderTextColor = {Color.border_color}
          value = {stateSearch.text_search}
          onChangeText = {text => setStateSearch(prevState => ({
            ...prevState,
            text_search: text
          }))}
          onSubmitEditing = {() => search_result()}
        />
        <Ionicons
          style={{position:'absolute', top:10, right:10, height:30, width:30, tintColor:'black'}}
          name = {'options-outline'}
          color = {'black'}
          size = {27}
          onPress = {() => setShowOptions(!showOptions)}
        /> 
      </View>
      {showOptions && <View style={style_Search_Scr.options}>
        <View style = {style_Search_Scr.options_area}>
          <Text style = {style_Search_Scr.title_options}>Country: </Text>
          <Picker
            selectedValue={stateSearch.country_id}
            onValueChange={(itemValue, itemIndex) =>
              setStateSearch(prevState => ({
                ...prevState,
                country_id: itemValue
              }))
            }
            style = {style_Search_Scr.selector_options}
          >
            {stateInit.country.map((item, index) => (
              <Picker.Item 
                label= {item.name} 
                value= {item.id}
                key = {item.id}
                style = {style_Search_Scr.item_choice}
              />
            ))}
          </Picker>
        </View>
        <View style = {style_Search_Scr.options_area}>
          <Text style = {style_Search_Scr.title_options}>Language: </Text>
          <Picker
            selectedValue={stateSearch.lang_id}
            onValueChange={(itemValue, itemIndex) =>
              setStateSearch(prevState => ({
                ...prevState,
                lang_id: itemValue
              }))
            }
            style = {style_Search_Scr.selector_options}
          >
            {stateInit.language.map((item, index) => (
              <Picker.Item 
                label= {item.name} 
                value= {item.id}
                key = {item.id}
                style = {style_Search_Scr.item_choice}
              />
            ))}
          </Picker>
        </View>
        <View style = {style_Search_Scr.options_area}>
          <Text 
            style = {{
              ...style_Search_Scr.title_options,
              flex: 1
            }}
          >
            Min Views: 
          </Text>
          <TextInput
            maxLength={3}
            style = {{
              ...style_Search_Scr.title_options,
              flex: 0.5,
              borderBottomColor: 'white', // Add this to specify bottom border color
              borderBottomWidth: 1,     // Add this to specify bottom border thickness
            }}
            value = {stateSearch.value_Views}
            onChangeText = {text =>
              setStateSearch(prevState => ({
                ...prevState,
                value_Views: text
              }))}
          />
          <Picker
            selectedValue={stateSearch.unit_Views}
            onValueChange={(itemValue, itemIndex) =>
              setStateSearch(prevState => ({
                ...prevState,
                unit_Views: itemValue
              }))
            }
            style = {{
              ...style_Search_Scr.selector_options,
              flex: 1.5
            }}
          >
            {min_Views_unit.map((item, index) => (
              <Picker.Item 
                label= {item.label} 
                value= {item.value}
                key = {item.value}
                style = {style_Search_Scr.item_choice}
              />
            ))}
          </Picker>
        </View>
        <View style = {style_Search_Scr.options_area}>
          <Text style = {style_Search_Scr.title_options}>Trending: </Text>
          <Picker
            selectedValue={stateSearch.is_trending}
            onValueChange={(itemValue, itemIndex) =>
              setStateSearch(prevState => ({
                ...prevState,
                is_trending: itemValue
              }))
            }
            style = {style_Search_Scr.selector_options}
          >
            {is_trending.map((item, index) => (
              <Picker.Item 
                label= {item.label} 
                value= {item.value}
                key = {item.value}
                style = {style_Search_Scr.item_choice}
              />
            ))}
          </Picker>
        </View>
        <View 
          style = {{
            ...style_Search_Scr.options_area,
            justifyContent: 'flex-end',
            marginBottom: 2
          }}
        >
          <TouchableOpacity
            style = {{
              ...style_Search_Scr.btn,
              borderColor: 'white'
            }}
            activeOpacity = {0.9}
            onPress = {() => setStateSearch({
              text_search: "",
              country_id: "-1",
              lang_id: "-1",
              value_Views: "0",
              unit_Views: 1000,
              is_trending: -1
            })}
          >
            <Text 
              style = {{
                color: 'white'
              }}
            >
              Clear
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{
              ...style_Search_Scr.btn,
              borderColor: 'white'
            }}
            activeOpacity = {0.9}
            onPress = {() => search_result()}
          >
            <Text 
              style = {{
                color: 'white'
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </View>}
      <FlatList
        data = {result}
        renderItem = {({item}) => (
          <RadioSearchItem
            radio = {item}
            onClick = {() => {}}
            key = {item.id}
          />
        )}
        showsVerticalScrollIndicator = {false}
        style = {{flex: 1}}
      />
    </SafeAreaView>
  )
}

const style_Search_Scr = StyleSheet.create({
  search_view:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  search_input:{
    height:40,
    flex:1,
    borderRadius:5,
    padding:5,
    opacity:0.8,
    paddingHorizontal:40,
    color:'black',
    fontSize: FontSize.medium,
    borderWidth: 1,
    borderColor: Color.primary_color,
    marginHorizontal: 5
  },
  options:{
    height: CONTANTS.HEIGHT*1/3,
    backgroundColor: '#0c0626',
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  options_area:{
    flexDirection: 'row',
    justifyContent:'center',
    flex: 1,
    marginHorizontal: 2
  },
  title_options:{
    flex: 1,
    textAlign:'center',
    color: 'white',
    fontSize: FontSize.medium - 2,
    alignSelf:'center'
  },
  selector_options:{
    flex: 2 ,
    justifyContent: 'center',
  },
  item_choice:{
    color: 'white',
    fontSize: FontSize.medium - 2,
    alignSelf:'center',
  },
  btn:{
    justifyContent: 'center',
    marginVertical: 7,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 2
  }
})

export default SearchScreen