import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import call from 'react-native-phone-call';
import React, { useState } from 'react'

const SosScreen = () => {
    const[inputvalue,setInputvalue] = useState("108");
    const triggerCall = ()=>
    {
        const args = {
            number : inputvalue,
            prompt : true,
        }
        // Makes a call
        call(args).catch(console.error);
    ;}


  return (
    <View style={styles.container}>
        <TouchableOpacity onPressOut={triggerCall} style={styles.button}>
            <Text style={styles.buttonText}>SOS</Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default SosScreen

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        backgroundColor:  'red',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 45,
        borderRadius: 120,
        padding: 50,
    },
    buttonText: {
        fontSize: 600,
        color: '#fff',
        fontSize: 20,
    },
})