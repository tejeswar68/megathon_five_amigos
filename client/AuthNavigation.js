import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './screens/navigation'
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";


const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState(false);

    // const userHandler = (user) => {
    //     user ? setCurrentUser(user) : setCurrentUser(null);
    // }

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         userHandler(user);
    //     })
    // }, [])

    return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation