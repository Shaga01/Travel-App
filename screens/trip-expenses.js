import { Image, StyleSheet, Text, View ,TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/common/screen-wrapper'
import BackButton from '../components/common/back-button'
import { colorr } from '../theme/theme'

import ExpenseCard from '../components/trips/expense-card'
import EmptyExpenses from '../components/trips/empty-expense'
import { useSelector } from 'react-redux'



const TripExpense = ({navigation, route}) => {
  const selectedTrip= route.params;
  const expenses= useSelector(state=>{
    const trips = state.trips.trips;
    const expenseToBeShown= trips.filter(trip => trip.id === selectedTrip.id);

    if(expenseToBeShown.length>0){
      return expenseToBeShown[0].expenses;
    }
    return[];
  })
  return (
    <ScreenWrapper> 
    <View>
      <BackButton onPresss={()=>navigation.goBack()} />
      <View style={styles.bannerContainer}>
        <Image source={selectedTrip.banner} style={styles.banner}/>
        <View style={styles.placeContainer}>
          <Text style={styles.place}>{selectedTrip.Place}</Text>
        </View>

      </View>
      <View style={styles.txtBtn}>
        <Text style={styles.subHead}>Expenses</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Add Expense',selectedTrip)}>
        <Text style={styles.buttonText} >Add Expense</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatlistCont}>
       
        <FlatList data={expenses}
         showsVerticalScrollIndicator={true}
         keyExtractor={item=>item.id}
         ListEmptyComponent={<EmptyExpenses/>}
         renderItem={({item})=>
        
         <ExpenseCard expense={item}/>
         } 
        
         />  
      </View>

    </View>
    </ScreenWrapper>
  )
}

export default TripExpense

const styles = StyleSheet.create({
  banner:{
    height:240,
    width:'124%',
    resizeMode:'cover',
  },
  bannerContainer:{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative'
  },
  buttonText:{
    color:colorr.text1,
    fontWeight:'700',
    fontSize:18,

  },
  flatlistCont:{
    marginBottom:100,
    height:350,
    
  },
  place:{
    textAlign:'center',
    color: colorr.Text,
    fontSize:20,
    fontWeight:'700',
  },
  placeContainer:{
    backgroundColor:colorr.Babypowder,
    minWidth:'50%',
    paddingVertical:12,
    borderRadius:18,
    position:'absolute',
    bottom:-30,
  },
  txtBtn:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
    marginBottom:24,

  },
  subHead:{
    fontSize:18,
    fontWeight:'600',
    color:colorr.Text,
  },

})