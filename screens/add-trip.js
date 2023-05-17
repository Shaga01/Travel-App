import { StyleSheet, Text, View ,Image, TextInput} from 'react-native'
import React, { useState, useEffect } from 'react'
import ScreenWrapper from '../components/common/screen-wrapper'
import { Randon_thumbnail } from '../assests/asset';
import BackButton from '../components/common/back-button';

import { colorr } from '../theme/theme';
import AddButton from '../components/common/add-button';
import { useDispatch } from 'react-redux';
import { addTrip } from '../redux/slice/trips';


const AddTrip = ({navigation}) => {
  
  const [placeBanner,setPlaceBanner]= useState();
  const [place,setPlace]= useState('');
  const [country,setCountry]= useState('');
  useEffect(()=>{
    setPlaceBanner(Randon_thumbnail());
  },[]);

  const dispatch= useDispatch();

  const handleAddTrip=()=>{
    const tripData={
      id: Date.now(),
      Place:place,
      Country:country,
      banner:placeBanner,
      expenses:[],
    }
    dispatch(addTrip(tripData))
    navigation.navigate('Home')
  }
  
  return (
    <ScreenWrapper>

   <View style={styles.addTripWrapper}>
        <View>
          <BackButton onPresss={()=> navigation.goBack()}/>
          <View style={styles.bannerContainer}>
            <Image source={placeBanner} style={styles.banner}/>
          </View>
          <View style={styles.form}>
              <View style={styles.formItem}>
                <Text style={styles.subHeading}>
                  Place
                </Text>
                <TextInput value={place} onChangeText={e=>setPlace(e)} style={styles.input}/>
             
              </View>

              <View style={styles.formItem}>
                <Text style={styles.subHeading}>
                  Country
                </Text>
                <TextInput value={country} onChangeText={e=>setCountry(e)} style={styles.input}/>
             
              </View>
          </View>
         </View>

         <AddButton buttonText={'ADD TRIP'} onPress={handleAddTrip} />
         
   </View>
   
   
   
    </ScreenWrapper>
  );
}

export default AddTrip

const styles = StyleSheet.create({
  addTripWrapper:{
    display: 'flex',
    justifyContent:'space-between',
    height:'100%',

  },
  banner:{
    height:240,
    width:'120%',
    resizeMode:'cover',

  },
  bannerContainer:{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:12,
    
  },
  
  form:{
    marginVertical:12,
    
  },
  formItem:{
    marginVertical:12,
  },
  input:{
    backgroundColor: colorr.form,
    marginTop:12,
    fontSize:16,
    padding:12,
    borderRadius:18,
    borderWidth: 0.5,
    borderColor: "black"
  },
  subHeading:{
    fontSize:20,
    fontWeight:'600',
    color:colorr.Text,
  }
})