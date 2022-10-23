import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'



const BottomTabs = ({ currentUser, navigation }) => {

    const [activeTab, setActiveTab] = useState('HomeScreen')

    const icons = [
        {
            name: 'HomeScreen',
            active: "https://img.icons8.com/fluency-systems-filled/144/8F00FF/home.png",
            inactive: 'https://img.icons8.com/fluency-systems-regular/48/8F00FF/home.png'
        },
        {
            name: 'Search',
            active: "https://img.icons8.com/fluency-systems-filled/144/8F00FF/search.png",
            inactive: 'https://img.icons8.com/fluency-systems-regular/48/8F00FF/search--v1.png'

        },
        {
            name: 'sosScreen',
            active: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/8F00FF/external-sos-healthcare-tanah-basah-glyph-tanah-basah-2.png",
            inactive: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/8F00FF/external-sos-healthcare-tanah-basah-basic-outline-tanah-basah.png'
        },
        {
            name: 'mapScreen',
            active: "https://img.icons8.com/ios-filled/50/8F00FF/marker.png",
            inactive: 'https://img.icons8.com/ios/50/8F00FF/marker--v1.png'
        },
        {
            name: 'profileScreen',
            active: currentUser.profile_picture,
            inactive: currentUser.profile_picture
        },
    ]

    const Icon = ({ icon }) => (

        <TouchableOpacity onPress={() => { if (activeTab !== icon.name) { setActiveTab(icon.name); navigation.push(icon.name); } }}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={[styles.icon, icon.name === 'profileScreen' ? styles.profilePic(activeTab) : null]} />
        </TouchableOpacity>
    )
    return (
        <View style={[styles.container, styles.wrapper]}>
            {
                icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 999,
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 50,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: "#8F00FF",
        marginLeft:5,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'profileScreen' ? 2 : 0,
        borderColor: '#8F00FF',
    })
})

export default BottomTabs