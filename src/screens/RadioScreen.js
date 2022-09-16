import { View, Text, ScrollView, SafeAreaView, StyleSheet, FlatList, RefreshControl, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { BorderItem, CountryItem, RadioTrendingItem, SlideShow, Toolbar } from '../components'
import { Color, CONTANTS, FontSize, Methods } from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { playSingleSong } from '../utils/Methods';
import HeaderTitle from '../components/HeaderTitle';

const RadioScreen = (props) => {

    //navigation
    const { navigation, route } = props
    //function of navigate to/back
    const { navigate, goBack } = navigation

    const [data, setData] = useState({
        reload: false,
        playlist: [],
        onDemand: [],
        trending: [],
        latest: [],
        country: [],
        language: [],
    })

    useEffect(() => {
        loadData()
    })

    const loadData = async () => {
        const resp = await Methods.get_Data_HomeSCR(1, 7, 'usertest2')
        setData(resp)
    }

    const onRadioClick = (radio) => {
        // alert(radio.name)
        playSingleSong(radio)
    }

    const onCountry_Lang_Click = (item, for_language) => {
        navigate('RadioCountryScreen', { item: item, for_language: for_language })
    }

    const onTitleClick = (title) => {
        switch (title) {
            case 'Most Views':
                navigate(CONTANTS.MOSTVIEW_STACK)
                break;
            case 'Trending':
            case 'Latest':
            case 'Country':
            case 'Language':
                navigate('RadioListScreen', { title: title })
                break;
            default:
                break;
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={data.reload}
                        onRefresh={() => {
                            setData({
                                reload: true,
                                playlist: [],
                                trending: [],
                                mostViews: [],
                                latest: [],
                                country: [],
                                language: [],
                            })
                            loadData()
                        }}
                    />
                }
            >
                <HeaderTitle title='Home'/>
                <View style={{marginTop: CONTANTS.HEIGHT * 0.02}}></View>
                <SlideShow
                    items={data.playlist}
                    navigation={navigation}
                />
                <BorderItem />
                <Text
                    onPress={() => onTitleClick('Trending')}
                    style={style_RadioScr.text_List}
                >
                    Trending
                </Text>
                <FlatList
                    data={data.trending}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <RadioTrendingItem
                            radio={item}
                            onClick={onRadioClick}
                            key={item.id}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 5, }}
                />
                <Text
                    onPress={() => onTitleClick('Most Views')}
                    style={style_RadioScr.text_List}
                >
                    Most Views
                </Text>
                <FlatList
                    data={data.mostViews}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <RadioTrendingItem
                            radio={item}
                            onClick={onRadioClick}
                            key={item.id}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 5, }}
                />
                <Text
                    onPress={() => onTitleClick('Latest')}
                    style={style_RadioScr.text_List}
                >
                    Latest
                </Text>
                <FlatList
                    data={data.latest}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <RadioTrendingItem
                            radio={item}
                            onClick={onRadioClick}
                            key={item.id}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 5, }}
                />
                <Text
                    onPress={() => onTitleClick('Country')}
                    style={style_RadioScr.text_List}
                >
                    Country
                </Text>
                <FlatList
                    data={data.country}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <CountryItem
                            country={item}
                            onClick={() => onCountry_Lang_Click(item, false)}
                            key={item.id}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 5, }}
                />
                <Text
                    onPress={() => onTitleClick('Language')}
                    style={style_RadioScr.text_List}
                >
                    Language
                </Text>
                <FlatList
                    data={data.language}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <CountryItem
                            country={item}
                            onClick={() => onCountry_Lang_Click(item, true)}
                            key={item.id}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 5, }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const style_RadioScr = StyleSheet.create({
    text_List: {
        fontSize: FontSize.title + 5,
        color: 'black',
        margin: 5,
        marginLeft: 10,
    },
    search_view: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search_input: {
        height: 40,
        flex: 1,
        borderRadius: 5,
        padding: 5,
        opacity: 0.8,
        paddingStart: 40,
        color: 'black',
        fontSize: FontSize.medium,
        borderWidth: 1,
        borderColor: Color.primary_color,
        marginHorizontal: 5
    }
})

export default RadioScreen