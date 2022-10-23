import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import BottomTabs from '../components/homeScreen/BottomTabs'

const AppointmentScreen = ({ navigation, route }) => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    onSnapshot(query(collection(db, "users"), where("isDoctor", "==", true)), (doctors) => {
      const received = [];
      doctors.forEach((doc) => {
        received.push(doc.data());
      });
      setDoctors(received);
    });
  }, [])
  return (
    <View style={styles.container}>
      <Text>AppointmentScreen</Text>
      {doctors.map((doc, index) => (
        <Text key={index}>{doc.username}</Text>
      ))}
      <BottomTabs navigation={navigation} currentUser={route.params.paramKey} />
    </View>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

    button:{
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 45,
        borderRadius: 5,
        marginTop: 20,
    }
})

