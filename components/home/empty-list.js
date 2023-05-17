import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Images } from '../../assests/asset'

const EmptyList = () => {
  return (
    <View style={styles.Emptylistt}>
        <Image source={Images.empty_trip} style={styles.banner} />
      <Text style={styles.message}>No Trips Found</Text>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({
    banner:{
        height:230,
        width:500,
    },
    Emptylistt:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,

        
    },
    message:{
        fontSize:16,
        fontWeight:'600',
    }

})