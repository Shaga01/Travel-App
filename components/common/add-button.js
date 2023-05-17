import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { colorr } from '../../theme/theme';


const AddButton = (props) => {
    const{buttonText,onPress}=props;
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.addButton}>
            <Text style={styles.addTxt}>{buttonText ? buttonText:'ADD'}</Text>
         </View>
    </TouchableOpacity>
  
  )
}

export default AddButton

const styles = StyleSheet.create({
    addButton:{
        backgroundColor: colorr.buttonn,
      
        paddingVertical:12,
        paddingHorizontal:130,
        borderRadius:20,
        position:'absolute',
        bottom:0,
        
        
    
       display:'flex',
       alignItems:'center',
       alignSelf:'center',
    },
    addTxt:{
        color:colorr.white,
        fontSize:20,
        fontWeight:'700'
    },
})