import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'



const BottomTabs = ({navigation}) => {
    const [activeTab, setActiveTab] = useState('HomeScreen')

    const icons = [
        {
            name: 'HomeScreen',
            active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
            inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png'
        },
        {
            name: 'VetScreen',
            active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/search.png",
            inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/search--v1.png'
        },
        {
            name: 'Reels',
            active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
            inactive: 'https://img.icons8.com/ios/50/ffffff/instagram-reel.png'
        },
        {
            name: 'Shop',
            active: "https://img.icons8.com/ios-filled/50/ffffff/like--v1.png",
            inactive: 'https://img.icons8.com/ios/50/ffffff/like--v1.png'
        },
    ]

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => { !activeTab?navigation.push(icon.name):<></>; setActiveTab(icon.name)}}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={[styles.icon, icon.name === 'Profile' ? styles.profilePic(activeTab) : null]} />
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
        backgroundColor: '#000',
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#fff',

    })
})

export default BottomTabs