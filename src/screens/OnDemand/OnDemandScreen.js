import React, { useReducer, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    SafeAreaView, ScrollView, FlatList
} from 'react-native';
import { makeRequest } from '../../utils/Methods';
import { HEIGHT, WIDTH, API_URL } from '../../utils/Constant';

const initState = {
    playlists: []
}

const OnDemandScreen = () => {

    const [state, dispatch] = useReducer(initState)

    const fetchData = async () => {

        console.log('Fetching...')

        const url = API_URL + 'playlist/getAll.php'

        console.log(url)

        const result = await makeRequest(url, 'GET', {})

        console.log("Result:",result.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={styles.text}>On Demand</Text>
                </View>

            </ScrollView>
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
    }
})

export default OnDemandScreen