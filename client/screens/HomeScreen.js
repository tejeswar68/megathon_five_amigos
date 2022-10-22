import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const HomeScreen = () => {

    const handleSignOut = async () => {
      await signOut(auth).then(() => {
        console.log("Signed Out")
      }).catch((error) => {
        console.log(error.message)
      });
    }

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPressOut={handleSignOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})