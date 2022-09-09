import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WIDTH, HEIGHT } from '../utils/Constant'
import { Color } from '../utils'
const MostViewScreen = () => {
  const [mostViewList, setMostViewList] = useState()
  const getMostViewRadio = async (page, step, uid) => {
    try {
      const response = await fetch(
        `http://tuanpc.pw/radiorn/api/radio/getMostViewRadio.php?page=${page}&step=${step}&uid=${uid}`
      );
      const json = await response.json();
      setMostViewList(json.data);
    } catch (error) {
      console.error(error);
    }
  };
  getMostViewRadio(1,5,'usertest2')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.header}>Most Viewed</Text>
      </View>
      <View style={styles.bodyView}>
        <FlatList
          data={mostViewList}
          renderItem={({item, index})=>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemView}>
              <View>
                <Image
                  source={{uri: item.thumbnail}}
                  style={styles.itemImage}
                />
              </View>
              <View style={styles.itemName}>
                <Text style={styles.numberText}>#{index+1}: {item.views}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
              </View>
              <View style={styles.playView}>
                <Image
                  source={require('../assets/images/play.png')}
                  style={styles.itemPlay}
                />
              </View>
          </View>
          </TouchableOpacity>}
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
  itemContainer:{
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  itemImage:{
    width: 60,
    height: 60,
    borderRadius: 15,
    resizeMode: 'contain',
    elevation: 1,
    borderWidth: 0.1,
    borderColor: 'gray'
  },
  itemView:{
    width: WIDTH*0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName:{
    marginLeft: 10,
    
  },
  nameText:{
    fontWeight: '700',
    color: 'black'
  },
  numberText:{
    color: '#b30047',
    fontWeight: '500'
  },
  itemPlay:{
    width: 30,
    height: 30,    
  },
  playView:{
    flex: 1,
    alignItems: 'flex-end',
  }
})

export default MostViewScreen