import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../firebase'

const AppointmentScreen = () => {
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
    <View>
      <Text>AppointmentScreen</Text>
      {doctors.map((doc, index) => (
        <Text key={index}>{doc.username}</Text>
      ))}
    </View>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 45,
        borderRadius: 5,
        marginTop: 20,
    }
})