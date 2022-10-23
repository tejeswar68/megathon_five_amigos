import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import * as Location from 'expo-location'

const MapScreen = () => {
    const [pin, setPin]= useState({
        latitude: 17.449409013408623,
        longitude: 78.350934907794
    })
    const [results, setResults]= useState([
        { id: 1, name: 'Himagiri Hospitals', latitude: 17.442457547253078, longitude: 78.35878685886162},
        { id: 2, name: 'AIG Hospitals', latitude: 17.44372502001161, longitude: 78.36608230139817},
        { id: 3, name: 'KIMS Hospitals', latitude: 17.467062374054006, longitude: 78.36778708887141}
    ])

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});

          setPin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
        })();
      }, []);

  return (
    <View style={styles.container}>
        <Text>search</Text>


            <MapView style={styles.map}
                initialRegion={{
                    latitude: 17.449409013408623, // 17.45858317526013
                    longitude: 78.350934907794, // 78.36072174807099
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.10
                }}
                showsUserLocation= {true}
                onUserLocationChange= {(event) => {
                    setPin({
                        latitude: event.nativeEvent.coordinate.latitude,
                        longitude: event.nativeEvent.coordinate.longitude
                    })
                }}
            >
                <Marker 
                    coordinate={pin}
                    pinColor='purple'
                    draggable= {true}
                    onDragEnd= {(event) => {
                        setPin({
                            latitude: event.nativeEvent.coordinate.latitude,
                            longitude: event.nativeEvent.coordinate.longitude
                        })
                    }}
                    >
                        <Callout>
                            <Text>You are here !!!</Text>
                        </Callout>
                </Marker>

                <Marker 
                    coordinate={{
                        latitude: results[0].latitude,
                        longitude: results[0].longitude
                    }}
                    pinColor='red'
                    >
                        <Callout>
                            <Text>{results[0].name}</Text>
                        </Callout>
                </Marker>

                <Marker 
                    coordinate={{
                        latitude: results[1].latitude,
                        longitude: results[1].longitude
                    }}
                    title= {results[1].name}
                    pinColor='red'
                    >
                        <Callout>
                            <Text>{results[1].name}</Text>
                        </Callout>
                </Marker>

                <Marker 
                    coordinate={{
                        latitude: results[2].latitude,
                        longitude: results[2].longitude
                    }}
                    pinColor='red'
                    >
                        <Callout>
                            <Text>{results[2].name}</Text>
                        </Callout>
                </Marker>


                <Circle 
                    center={pin}
                    radius={5000}
                />
            </MapView>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2
    }
})
