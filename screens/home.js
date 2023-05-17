import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/common/screen-wrapper'

import { Images, Randon_thumbnail } from '../assests/asset'
import { colorr } from '../theme/theme'
import EmptyList from '../components/home/empty-list'
import { useSelector } from 'react-redux'



const Home = ({navigation}) => {

  const tripList=useSelector(state=>state.trips.trips)
  return (
    <ScreenWrapper> 
    <View>
      <View style={styles.homeHeader}>
        <Text style={styles.heading}>Tripper</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={Images.trip_banner} style={styles.banner}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Add Trip')}>
          <View style={styles.atButton}>
            <Text style={styles.atText}>Add Trip</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <Text style={styles.subHeading}>RECENT TRIPS</Text> 
    <View style={styles.listWrapper}>
      {/* {FLatlistt for scrolling a section} */}
      <FlatList data={tripList} 
      showsVerticalScrollIndicator={false}
      keyExtractor={item=>item.id}
      ListEmptyComponent={<EmptyList/>}
      columnWrapperStyle={styles.tripList}
      numColumns={2}
      
      renderItem={({item})=>(
        
        <TouchableOpacity onPress={()=>navigation.navigate('Trip Expense',item)}> 
          <View style={styles.tripCard}> 
            <Image source={item.banner} style={styles.tripBanner}/>
            <Text style={styles.Place}>{item.Place}</Text>
            <Text style={styles.Country}>{item.Country}</Text>
          </View>
        </TouchableOpacity>
      )}/> 
      
    </View>
    
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  atButton:{
    position:'absolute',
    backgroundColor: colorr.buttonn,
    paddingHorizontal:24,
    paddingVertical:16,
    borderRadius:18,
    bottom:-20,
    
    left:50,

  },
  atText:{
    fontWeight:800,
    fontSize:16,
    color: colorr.white,
  },
  banner:{
    width:'100%',
    height:300,
    resizeMode: 'contain',
    borderRadius: 60 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black"


  },
  bannerContainer:{
    //centering a div
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    //these upper 3 clines
    paddingTop:25,
    position: 'relative',
  },
  Country:{
    fontSize:12,
    fontWeight:'600',
    marginLeft:6,
  },
  heading:{
    marginTop:12,
    fontSize:28,
    fontWeight:'600',
    color: colorr.Text,
    
  },
  listWrapper:{
    marginBottom:120,
    height:270,
  },
  Place:
  {
    fontSize:18,
    fontWeight:'600',
    marginLeft:6,
  },
  subHeading:{
    fontSize:18,
    fontWeight:'700',
    color: colorr.Text,
    paddingTop:20,
    marginBottom:12,
  },
  tripBanner:{
    height:150,
    width:150,
  },
  tripCard:{
    backgroundColor:colorr.white,
    marginBottom:12,
    padding:8,
    borderRadius:18,
  },
  tripList:
  {
    justifyContent:'space-between',
  },

})