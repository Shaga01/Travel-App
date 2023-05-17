import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Category_Bg, colorr } from '../../theme/theme'

//in trip-expenses we have passed item values as expense hence
const ExpenseCard = ({expense}) => {
  return (
    <View style={{...styles.cardWrapper, 
                    backgroundColor: Category_Bg[expense.category]}}>
    <View>
        <Text style={styles.expTitle}>{expense.title}</Text>
        <Text style={styles.expCategory}>{expense.category}</Text>
    </View>
    <View>
        <Text style={styles.expAmount}>रू{expense.amount}</Text>
    </View>
    </View>
  )
}

export default ExpenseCard

const styles = StyleSheet.create({
    cardWrapper:{
        padding:12,
        marginBottom:12,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        borderRadius:18,
        alignItems:'center',

    },
    expAmount:{
        fontSize:18,
        fontWeight:'700',
        color:colorr.Text,
    },
    expCategory:{
        fontSize:13,
        marginVertical:4,
        color:colorr.Text2,

    },
    expTitle:{
        fontSize:18,
        fontWeight:'500',
        color: colorr.Text,

    }
})