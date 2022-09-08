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

const initState = {
    playlists: [],
    refreshing: true,
    page: 0,
    step: 8
}

const OnDemandScreen = () => {

    const [state, dispatch] = useReducer(OnDemandReducer, initState)

    console.log("Re-render:", state)

    const fetchData = async () => {

        console.log('Fetching...')

        const url = API_URL + `playlist/getRange.php?page=${state.page}&step=${state.step}`

        const result = await makeRequest(url, 'GET', {})

        if (result.data.length > 0) {
            dispatch(SET_DATA_ACTION(result.data))
            dispatch(INCREASE_PAGE_ACTION())
        }else{
            console.log('End fetching')
        }

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
                    return <DemandPlaylistItem key={item.id} playlist={item} />
                }}
                onEndReached={() => {
                    fetchData();
                }}
                columnWrapperStyle={{ marginHorizontal: '3%' }}
                ListHeaderComponent={() => {
                    return (
                        <View>
                            <Text style={styles.text}>On Demand</Text>
                        </View>
                    )
                }}
            />

            {state.refreshing && <Progressbar />}


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: HEIGHT * 0.045,
        fontWeight: 'bold',
        marginLeft: WIDTH * 0.045,
        marginBottom: HEIGHT * 0.01,
        marginTop: HEIGHT * 0.025
    },

})

export default OnDemandScreen