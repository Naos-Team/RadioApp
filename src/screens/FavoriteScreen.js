import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WIDTH, HEIGHT } from '../utils/Constant'
import { Color } from '../utils'
import HeaderTitle from '../components/HeaderTitle'

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
            <HeaderTitle title='Favorite' />
            <View style={{ marginTop: HEIGHT * 0.02 }}></View>
            <View style={styles.bodyView}>
                
                <FlatList
                    data={favoriteList}
                    numColumns={2} 
                    renderItem={({item, index})=>
                      <TouchableOpacity 
                        activeOpacity={0.5} 
                        style={styles.itemView}>
                        <View style={styles.imageView}>
                          <Image 
                            style={styles.itemImage}
                            source={{uri: item.thumbnail}}/>
                        </View>
                        <Text style={styles.itemName}>{item.name}</Text>
                      </TouchableOpacity>                        
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
      width: WIDTH,
      justifyContent: 'center',
    },
    itemView:{
        flex: 0.5,
        marginTop: 5,
        marginBottom: 15,
        borderadius: 20,
        borderWidth: 0.1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    imageView:{
      
    },
    itemImage:{
      resizeMode: 'cover',
      width: WIDTH*0.4,
      height: WIDTH*0.4,
      borderRadius: 30,
      borderColor: 'gray',
      borderWidth: 0.1
    },
    itemName:{
      color: 'black',
      fontWeight: '500',
      marginTop: 5
    }
})

export default FavoriteScreen