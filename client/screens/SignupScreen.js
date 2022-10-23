import { View, StyleSheet, Platform, StatusBar, Image, Text } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
  }
})

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/loginpage.png')} style={{justifyContent:'center',alignItems:'center',marginLeft:50,marginTop:35}} />
      <View style={styles.logoContainer}>
      </View>
      <SignupForm navigation={navigation} />
    </View>
  )
}

export default SignupScreen