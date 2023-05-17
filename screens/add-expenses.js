import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import ScreenWrapper from '../components/common/screen-wrapper'
import BackButton from '../components/common/back-button';
import AddButton from '../components/common/add-button';
import { Images } from '../assests/asset';
import { colorr } from '../theme/theme';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/slice/trips';

const categories=['Shopping','Food','Commute','Entertainment','Others']

const AddExpense = ({navigation,route}) => {
  const[title,setTitle]=useState('');
  const[amount,setAmount]=useState(0);
  const[category,setCategory]=useState('');

  const selectedTrip=route.params;
  const dispatch =useDispatch()
  const handleExpenseAdded=()=>{
    const expense={
      id:Date.now(),
      title,
      amount,
      category,
    }
    const data ={
      tripId: selectedTrip.id,
      expense,
    }
    dispatch(addExpense(data))
    navigation.navigate('Trip Expense',selectedTrip)
  }



  return (
    <ScreenWrapper>
    <View style={styles.addExpenseWrapper}>
      <View>
        <BackButton onPresss={()=>navigation.goBack()}/>
        <View style={styles.bannerCont}>
          <Image source={Images.add_exp} style={styles.banner}/>
          <View style={styles.subHeadCont}>
            <Text style={styles.subHead}>Add New Expense</Text>

          </View>
        </View>
        <View style={styles.form}>
        <View style={styles.formItems}>
                <Text style={styles.label}>
                  Item
                </Text>
                <TextInput value={title} onChangeText={e=>setTitle(e)} style={styles.input}/>
             
              </View>
              <View style={styles.formItem}>
                <Text style={styles.label}>
                  Cost
                </Text>
                <TextInput value={amount} onChangeText={e=>setAmount(Number(e))} style={styles.input}/>
             
              </View>
              <View style={styles.formItem}>
                <Text style={styles.label}>
                  Category
                </Text>
                <View style={styles.categoryOptions}>
                  {categories.map(cat=>(
                    <TouchableOpacity style={{...styles.categories,
                    backgroundColor:category===cat?colorr.text1:colorr.white}}
                    onPress={()=>setCategory(cat)}>
                      <Text style={{...styles.categoryLabel,color: category===cat? colorr.white:'black',}}>
                        {cat}
                      </Text>
                    </TouchableOpacity>

                  ))}
                </View>
                
             
              </View>

        </View>
      </View>
      <AddButton onPress={handleExpenseAdded}/>
      
    </View>
    </ScreenWrapper>
  )
}

export default AddExpense

const styles = StyleSheet.create({
  addExpenseWrapper:{
    display:'flex',
    justifyContent:'space-between',
    height:'100%',
  },
  banner:{
    height:240,
    width:'120%',
    resizeMode:'contain',
  },
  bannerCont:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
  },
  categories:{
    paddingVertical:10,
    paddingHorizontal:20,
    marginRight:6,
    marginBottom:16,
    borderRadius:18,
    borderWidth: 1,
    borderColor: "black"
  
  },
  label:{
    fontSize:20,
     fontWeight:'600',
     color:colorr.Text},

  categoryLabel:{
    fontSize:12,
    fontWeight:'600'
  },
  categoryOptions:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10,
    
  },
  form:{
    marginVertical:5,
    
  },
  formItem:{
    marginVertical:5,
  },
  formItems:{
    marginTop:30,
  },
  subHead:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'700',
    color:colorr.Text,
  },
  subHeadCont:{
    position:'absolute',
    bottom:-10,
    paddingVertical:12,
    width:'70%',
    backgroundColor:colorr.Babypowder,
    borderRadius:18,
  },
  input:{
    backgroundColor: colorr.form,
    marginTop:5,
    fontSize:16,
    padding:5,
    borderRadius:18,
    borderWidth: 0.5,
    borderColor: "black"
  },
})
