import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { signOut } from 'firebase/auth';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import BottomTabs from '../components/homeScreen/BottomTabs';

const HomeScreen = ({ navigation }) => {

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      console.log("Signed Out")
    }).catch((error) => {
      console.log(error.message)
    });
  }
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    onSnapshot(doc(db, "users", auth.currentUser.email), (doc) => {
      setCurrentUser(doc.data());
    });
  }, [])

  return (
    <>
      <View>
        <TouchableOpacity onPressOut={handleSignOut}>
          <Text>SignOut</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.container}>
        <View style={styles.bigbox}>
          <Image
            style={styles.img}
            source={require('../assets/healthmate.jpg')}
          />
          <View style={{ ...styles.inner, backgroundColor: 'skyblue' }}>
            <Text style={{ color: 'white', fontSize: 30 }}>HEALTHMATE</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black', }} />
            <View>
              <Text style={{ width: 200, padding: 5, textAlign: 'center', fontSize: 20 }}>FIRST-AID INFO</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
        </View>
        <View style={styles.smallbox}>
          <View style={{ ...styles.inner, backgroundColor: 'orange' }}>
            <FontAwesome5 name={'paw'} size={50} color="white" style={{ marginBottom: 10 }} />
            <Text style={{ color: 'white', fontSize: 20 }}>VETERNARY</Text>

            <TouchableOpacity onPressOut={() => { navigation.push('VetScreen') }}>
              <FontAwesome5 name={'arrow-right'} size={30} color="white" style={{ marginTop: 10 }} />
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.smallbox}>
          <View style={{ ...styles.inner, backgroundColor: 'lightgreen' }}>
            <FontAwesome5 name={'user'} size={50} color="white" style={{ marginBottom: 10 }} />
            <Text style={{ color: 'white', fontSize: 20 }}>HUMAN</Text>
            <TouchableOpacity onPressOut={() => { navigation.push('HumanScreen') }}>
              <FontAwesome5 name={'arrow-right'} size={30} color="white" style={{ marginTop: 10 }} />
            </TouchableOpacity>
          </View>


        </View>



        {!currentUser.isDoctor && <View style={{ ...styles.bigbox, height: '20%', margin: 2 }}>
          <View style={{ ...styles.inner, backgroundColor: 'red' }}>
            <FontAwesome5 name={'stethoscope'} size={30} color="white" style={{ marginTop: 10 }} />
            <Text style={{ color: 'white', fontSize: 30 }}>BOOK AN APPOINTMENT</Text>
            <TouchableOpacity onPressOut={() => { navigation.push('AppointmentScreen') }}>
              <FontAwesome5 name={'arrow-right'} size={30} color="white" style={{ marginTop: 10 }} />
            </TouchableOpacity>
          </View>
        </View>}
        <BottomTabs currentUser={currentUser} navigation={navigation} />
        <StatusBar style="auto" />
      </View>

    </>
  )
}

export default HomeScreen



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1
  },
  bigbox:
  {
    width: '100%',
    height: '35%',
    padding: 5,
    justifyContent: 'center',


  },
  smallbox:
  {
    width: '50%',
    height: '25%',
    padding: 5,
    marginTop: 50

  },

  inner:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15

  }
  ,
  img:
  {
    width: '100%',
    height: '100%'
  }
})