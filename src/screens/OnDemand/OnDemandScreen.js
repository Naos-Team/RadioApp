import React, { useReducer, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    SafeAreaView, ScrollView, FlatList
} from 'react-native';
import { makeRequest } from '../../utils/Methods';
import { HEIGHT, WIDTH, API_URL } from '../../utils/Constant';
import { SET_DATA_ACTION } from '../../reducers/OnDemandReducer';
import OnDemandReducer from '../../reducers/OnDemandReducer';
import DemandPlaylistItem from '../../components/DemandPlaylistItem';

const initState = {
    playlists: []
}

const OnDemandScreen = () => {

    const [state, dispatch] = useReducer(OnDemandReducer, initState)

    console.log("Ondemand state:", state)

    const fetchData = async () => {

        console.log('Fetching...')

        const url = API_URL + 'playlist/getAll.php'

        const result = await makeRequest(url, 'GET', {})

        console.log(result.data)

        dispatch(SET_DATA_ACTION(result.data))

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <SafeAreaView>


            <FlatList
                data={state.playlists}
                numColumns={2}
                renderItem={({item, index}) => {
                    return <DemandPlaylistItem key={item.id} playlist={item}/>
                }}
                ListHeaderComponent={() => {
                    return (
                        <View>
                            <Text style={styles.text}>On Demand</Text>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: HEIGHT * 0.045,
        fontWeight: 'bold',
        marginLeft: WIDTH * 0.04,
        marginTop: HEIGHT * 0.025
    },

})

export default OnDemandScreen