import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import {  Card, Title, Paragraph } from 'react-native-paper'

const VetScreen = () => {
  return (

    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
   <Card style={styles.card}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
      <Card.Content>
      <Card.Cover style={{...styles.img,borderRadius:20}} source={{ uri: 'https://www.strawindia.org/images/first-aid-for-animals.jpg' }} />
        <Title style={{textAlign:'center'}}>Suggested items for a livestock first aid kit: </Title>
                  <Paragraph>Skin Cleanser</Paragraph>
                  <Paragraph>Water Soluble Ointment</Paragraph>
                  <Paragraph>Scissors & Flashlight</Paragraph>
                  <Paragraph>Cotton & Thermometer</Paragraph>
                  <Paragraph>Fly repellent</Paragraph>
      </Card.Content>
      <Card.Actions>
      </Card.Actions>
    </Card>

    <Card style={styles.card}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
      <Card.Content>
      <Card.Cover style={{...styles.img,borderRadius:20}} source={{ uri: 'https://www.loupiote.com/photos_l/loading-up-on-tricycle-water-buffalo-injured-in-traffic-accident-india-15376423190.jpg' }} />

        <Title style={{textAlign:'center'}}>In case of accidents: </Title>
        <Paragraph>Place the animal in a cool, well ventilated place or a shaded area.</Paragraph>
                  <Paragraph>Give small amounts of cold water containing glucose or sugar frequently.</Paragraph>
                  <Paragraph>Ice packs should be applied on the head, forehead and all over the body. If you cannot get ice, use cold towel press it on the head and chest of the animal.</Paragraph>
                  <Paragraph>Give cold milk to drink.</Paragraph>
                  <Paragraph>Once first aid has been administered, and the animal is stable, consult a vet.</Paragraph>
      
      </Card.Content>
      <Card.Actions>
       
      </Card.Actions>
    </Card>

    <Card style={styles.card}>

    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
      <Card.Content>
      <Card.Cover  style={{...styles.img,borderRadius:20}} source={{ uri: 'https://rspcasa.b-cdn.net/wp-content/uploads/2020/05/SKETCHERS-AID-151640-2-3-20-8-PHOTO-BARB-SEIDEL-1-of-1.jpg' }} />

        <Title style={{textAlign:'center'}}>First Degree Burn Injuries: </Title>
        
        <Paragraph>Only superficial and outer layer of skin is involved.</Paragraph>
                  <Paragraph>It is a mild type of injury and recovers within few days.</Paragraph>
      </Card.Content>
      <Card.Actions>
       
      </Card.Actions>
    </Card>

    </View>
  </ScrollView>
  )
}

export default VetScreen



const styles = StyleSheet.create({
     
  card:{
    
    borderColor:'purple',
    borderWidth:2,
    padding:3,
    margin:20,
    borderRadius:20,
  },
  img:{
      margin:20,
    }


})
