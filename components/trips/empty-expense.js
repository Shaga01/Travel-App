import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Images } from '../../assests/asset'

const EmptyExpenses= () => {
  return (
    <View style={styles.Emptylistt}>
        <Image source={Images.empty_expense} style={styles.banner} />
      <Text style={styles.message}>You haven't recorded any expense for this trip.</Text>
    </View>
  )
}

export default EmptyExpenses

const styles = StyleSheet.create({
    banner:{
        height:230,
        width:500,
        resizeMode:'contain',
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