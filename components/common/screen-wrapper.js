import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'
import { colorr } from '../../theme/theme'

const ScreenWrapper = ({children}) => {
  return (
    <View style={styles.screenWrapper}> 
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    screenWrapper:{
        paddingTop: Platform.OS ==='ios' ? 60:0,
        paddingHorizontal:10,
        paddingBottom:15,
        minHeight:'100%',
        backgroundColor:colorr.Background,
        
    }
})