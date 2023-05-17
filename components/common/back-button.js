import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { iconn } from '../../assests/asset'
import { colorr } from '../../theme/theme'


const BackButton = (props) => {
    const{onPresss}=props;

  return (
    <TouchableOpacity onPress={onPresss}>
        <View style={styles.iconWrapper}> 
    
        <Image source={iconn.Back} style={styles.backIcon}/>

         </View>
    </TouchableOpacity>
    
  )
}

export default BackButton

const styles = StyleSheet.create({
    backIcon:{
        height:30,
        width: 30,

    },
    iconWrapper:{
        padding:6,
        marginLeft:-10,
        marginTop:10,
        backgroundColor: colorr.white,
        borderRadius: 20,
        width:20,
        height:40,
        
    },
    
})