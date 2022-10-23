import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import HumanScreen from './screens/HumanScreen'
import VetScreen from './screens/VetScreen'
import ProfileScreen from './screens/profileScreen'
import AppointmentScreen from './screens/AppointmentScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: true,
}

export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='HomeScreen' options={{
                title: "HEALTH-MATE",
                headerBackTitle: "Back to login",
                headerTitleStyle:{
                    color:"black",
                    fontSize: 20,
                },
                headerTitleAlign: "left",
               headerRight:()=>(
                <TouchableOpacity onPressOut={() => {navigation.push('profileScreen')}}>
                <FontAwesome5 name={'user'} size={30} color="black"  style={{marginTop:10}}/>
                </TouchableOpacity>
               )
            }} component={HomeScreen} />
            <Stack.Screen name='HumanScreen' options={{
                title: "HumanScreen",
                headerBackTitle: "Back to login",
                headerTitleStyle:{
                    color:"black",
                    fontSize: 20,
                },
                headerTitleAlign: "left",
                
            }} component={HumanScreen} />
            <Stack.Screen name='VetScreen' options={{
                title: "VETERNARY FIRST AID INFO",
                headerBackTitle: "Back to login",
                headerTitleStyle:{
                    color:"black",
                    fontSize: 20,
                },
                headerTitleAlign: "left"
            }} component={VetScreen} />
            <Stack.Screen name='profileScreen' options={{
                title: "ProfileScreen",
                headerTitleStyle:{
                    color:"black",
                    fontSize: 20,
                },
                headerTitleAlign: "left"
            }} component={ProfileScreen} />
             <Stack.Screen name='AppointmentScreen' options={{
                title: "BOOK AN APPOINTMENT",
                headerTitleStyle:{
                    color:"black",
                    fontSize: 20,
                },
                headerTitleAlign: "left"
            }} component={AppointmentScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)