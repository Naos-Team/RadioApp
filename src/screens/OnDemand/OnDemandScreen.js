import React, { useReducer, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    SafeAreaView, FlatList
} from 'react-native';
import { makeRequest } from '../../utils/Methods';
import { HEIGHT, WIDTH, API_URL } from '../../utils/Constant';
import { SET_DATA_ACTION, SET_REFRESH_ACTION, INCREASE_PAGE_ACTION } from '../../reducers/OnDemandReducer';
import OnDemandReducer from '../../reducers/OnDemandReducer';
import DemandPlaylistItem from '../../components/DemandPlaylistItem';
import Progressbar from '../../components/Progressbar';
import { PLAYLISTDETAIL_SCREEN } from '../../utils/Constant';
import HeaderTitle from '../../components/HeaderTitle';

const initState = {
    playlists: [],
    refreshing: true,
    page: 0,
    step: 8
}

const OnDemandScreen = ({ navigation }) => {

    const [state, dispatch] = useReducer(OnDemandReducer, initState)

    // console.log("Re-render:", state)

    const fetchData = async () => {

        // console.log('Fetching...')

        const url = API_URL + `playlist/getRange.php?page=${state.page}&step=${state.step}`

        const result = await makeRequest(url, 'GET', {})

        if (result.data.length > 0) {
            dispatch(SET_DATA_ACTION(result.data))
            dispatch(INCREASE_PAGE_ACTION())
        } else {
            console.log('End fetching')
        }

    }

    const openDetailScreen = (item) => {

        navigation.navigate(PLAYLISTDETAIL_SCREEN, {
            item
        });
    }


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <FlatList

                data={state.playlists}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return <DemandPlaylistItem key={item.id} playlist={item}
                        onPress={() => {
                            console.log(item);
                            openDetailScreen(item)
                        }}
                    />
                }}
                onEndReached={() => {
                    fetchData();
                }}
                columnWrapperStyle={{ marginHorizontal: '3%' }}
                ListHeaderComponent={() => {
                    return (
                        <HeaderTitle title='On demand'/>
                    )
                }}
            />

            {state.refreshing && <Progressbar />}


        </SafeAreaView>
    )
}

export default OnDemandScreen