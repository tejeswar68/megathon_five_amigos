import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';



const BottomTabs = ({ currentUser, navigation }) => {
    const route = useRoute();

    const [activeTab, setActiveTab] = useState('HomeScreen')
    useEffect(() => {
        setActiveTab(route.name);
    })

    const icons = [
        {
            name: 'HomeScreen',
            active: "https://img.icons8.com/fluency-systems-filled/144/000000/home.png",
            inactive: 'https://img.icons8.com/fluency-systems-regular/48/000000/home.png'
        },
        {
            name: 'Search',
            active: "https://img.icons8.com/fluency-systems-filled/144/000000/search.png",
            inactive: 'https://img.icons8.com/fluency-systems-regular/48/000000/search--v1.png'

        },
        {
            name: 'SosScreen',
            active: "https://as2.ftcdn.net/v2/jpg/02/75/63/71/1000_F_275637194_3QdpxTf9d2HuezQHmoLJPajDoXPf9DX3.jpg",
            inactive: 'https://as2.ftcdn.net/v2/jpg/02/75/63/71/1000_F_275637194_3QdpxTf9d2HuezQHmoLJPajDoXPf9DX3.jpg'
        },
        {
            name: 'MapScreen',
            active: "https://img.icons8.com/ios-filled/50/000000/marker.png",
            inactive: 'https://img.icons8.com/ios/50/000000/marker--v1.png'
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
        borderTopColor: "black",
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'profileScreen' ? 2 : 0,
        borderColor: '#000000',
    })
})

export default BottomTabs