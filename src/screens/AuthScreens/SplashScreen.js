import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native'
import { WIDTH, HEIGHT } from '../../utils/Constant'
function SplashScreen({navigation}) {
  useEffect(()=>{
      setTimeout(() => {
        navigation.navigate('Login')
      }, 2500)
  })
  return (
    <SafeAreaView style={styles.view}>
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.logo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYp3l3N5AGSQXgNIJc5CvN3CCoJM7MUJLImnhVMTKl1OvgfJFR4GZkL-mRPJ4lNeq4T9s&usqp=CAU'}} />
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.bottomView}>
        <ActivityIndicator size="large" color="black"/>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view:{
    flex : 1,
  },
  container:{
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  topView:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 90
  },
  bottomView:{
    flex: 10
  },
  logo:{
    width: HEIGHT*0.14,
    height: HEIGHT*0.14,
    resizeMode: 'contain',
  },
  title:{
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginTop:10
  }
})

export default SplashScreen