import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WIDTH, HEIGHT } from '../utils/Constant'
import { Color } from '../utils'

const FavoriteScreen = () => {
    const [favoriteList, setFavoriteList] = useState()
    const getFavoriteList = async (uid) => {
        try {
          const response = await fetch(
            `https://tuanpc.pw/radiorn/api/favorite/getByUID.php?uid=${uid}`
          );
          const json = await response.json();
          setFavoriteList(json.data);
        } catch (error) {
          console.error(error);
        }
      };
    getFavoriteList('usertest1')
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.header}>Favorite</Text>
            </View>
            <View style={styles.bodyView}>
                <FlatList 
                    data={favoriteList}
                    renderItem={({item, index})=>
                        <View style={styles.itemView}>
                            <Image 
                                style={styles.itemImage}
                                source={{uri: item.thumbnail}}/>
                            <Text>{item.name}</Text>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 100,
      padding: 10,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    headerView:{
      flex: 7,
      width: WIDTH*0.9,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    header:{
      fontSize: 18,
      fontWeight: 'bold',
      color: Color.primary_color,
      alignSelf: 'flex-start',
    },
    bodyView:{
      flex: 90,
    },
    itemView:{
        width: WIDTH*0.4,
        height: WIDTH*0.4,
        alignItems: 'center',
    },
    itemImage:{
        width: 100,
        height: 100,
    }
})

export default FavoriteScreen