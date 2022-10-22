import { StyleSheet, Text, TouchableOpacity, View,StatusBar } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import Humanscreen from './HumanScreen';
import VetScreen from './VetScreen';

const HomeScreen = ({navigation}) => {

    const handleSignOut = async () => {
      await signOut(auth).then(() => {
        console.log("Signed Out")
      }).catch((error) => {
        console.log(error.message)
      });
    }

  return (
    <>
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPressOut={handleSignOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressOut={()=>{navigation.push('profileScreen')}}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
    <View style={styles.bigbox}>
      <View style={{...styles.inner, backgroundColor:'skyblue'}}>
        <Text style={{color:'white',fontSize:30}}>HEALTHMATE</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 200,padding:5, textAlign: 'center',fontSize:20}}>FIRST-AID INFO</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  </View>
    </View>
    <View style={styles.smallbox}>
      <View style={{...styles.inner,backgroundColor:'orange'}}>
        <Text style={{color:'white',fontSize:20}}>VETERNARY</Text>
        <TouchableOpacity onPressOut={()=>{navigation.push('VetScreen')}}>
        <Text>navvv</Text>
      </TouchableOpacity>
      </View>
  
    </View>
    <View style={styles.smallbox}>
      <View style={{...styles.inner,backgroundColor:'lightgreen'}}>
        <Text style={{color:'white',fontSize:20}}>HUMAN</Text>
        <TouchableOpacity onPressOut={()=>{navigation.push('HumanScreen')}}>
        <Text>navvv</Text>
      </TouchableOpacity>
      </View>
  
    </View>
 
      <StatusBar style="auto" />
    </View>
    
    
    </>
  )
}

export default HomeScreen



const styles = StyleSheet.create({
container:{
  width:'100%',
  height : '85%',
  padding : 5,
  flexDirection:'row',
  flexWrap:'wrap',
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex:1
},
bigbox :
{
    width:'100%',
    height:'35%',
    padding:5,
    justifyContent:'center', 
     
    
},
smallbox:
{
  width:'50%',
  height:'25%',
  padding:5,

},

  inner:
  {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15

    }
  ,
})