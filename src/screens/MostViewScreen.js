import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const MostViewScreen = () => {
  const getMostViewRadio = async (page, step, uid) => {
    try {
      const response = await fetch(
        `http://tuanpc.pw/radiorn/api/radio/getMostViewRadio.php?page=${page}&step=${step}&uid=${uid}`
      );
      const json = await response.json();
      console.warn(json.data)
      return json.data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    getMostViewRadio(1,5,'usertest2')
  },[])
  return (
    <View>
      
    
    </View>
  )
}

export default MostViewScreen