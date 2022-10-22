import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  Button, Card, Title, Paragraph } from 'react-native-paper'


const FirstAid = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
   <Card style={styles.card}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
      <Card.Content>
        <Title>Snake Bite</Title>
        <Paragraph>Seek medical attention as soon as possible (dial 911 or call local Emergency Medical Services [EMS]).
Antivenom is the treatment for serious snake envenomation. The sooner antivenom can be started, the sooner irreversible damage from venom can be stopped.
Driving oneself to the hospital is not advised because people with snakebites can become dizzy or pass out.
</Paragraph>
      </Card.Content>
      <Card.Cover   style={styles.img} source={{ uri: 'https://medlineplus.gov/ency/images/ency/fullsize/8928.jpg' }} />
      <Card.Actions>
        
      </Card.Actions>
    </Card>

    <Card style={styles.card}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
      <Card.Content>
        <Title>Accident</Title>
       
        <Paragraph>Excessive bleeding from head or mouth could be 
            a sign of danger. If you have a first aid box with you,
             consider dressing the wounds to stop the bleeding.
              You can use clean clothes as an alternative to a usual bandage.
               Make sure that the victim is in a comfortable position.
                Turn him to his side and keep his neck straight.
                 It is not a good idea to pour water in the victim’s mouth,
                  especially when he is unconscious. It may cause to choking.</Paragraph>
       <Card.Cover style={styles.img} source={{ uri: 'https://en.gaonconnection.com/wp-content/uploads/2021/02/Auto-Ricshaw.jpg' }} />
      
      </Card.Content>
      <Card.Actions>
       
      </Card.Actions>
    </Card>

    <Card style={styles.card}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
      <Card.Content>
        <Title>Heart Stroke</Title>
        <Paragraph>If you suspect heatstroke, call 911 or your local emergency number.
           Then move the person out of the heat right away. Cool the person by whatever means available. For example:
Put the person in a cool tub of water or a cool shower.
Spray the person with a garden hose.
Sponge the person with cool water.
Fan the person while misting with cool water.
Place ice packs or cool wet towels on the neck, armpits and groin.
Cover the person with cool damp sheets.
</Paragraph>
      </Card.Content>
      <Card.Cover  style={styles.img} source={{ uri: 'https://post.healthline.com/wp-content/uploads/2022/01/paramedic_giving_cpr_to_woman_having_heart_attack-732x549-thumbnail-732x549.jpg' }} />
      <Card.Actions>
       
      </Card.Actions>
    </Card>

    <Card style={styles.card}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
      <Card.Content>
        <Title>Sun Stroke </Title>
        <Paragraph>Put the person in a cool tub of water or a cool shower.
Spray the person with a garden hose.
Sponge the person with cool water.
Fan the person while misting with cool water.
Place ice packs or cool wet towels on the neck, armpits and groin.
Cover the person with cool damp sheets.</Paragraph>
      </Card.Content>
      <Card.Cover  style={styles.img} source={{ uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321972/man-in-the-sun-holding-wet-cloth-to-neck.jpg' }} />
      <Card.Actions>
        
      </Card.Actions>
    </Card>
    </View>
    </ScrollView>
  )
}

export default FirstAid

const styles = StyleSheet.create({
     
    card:{

      borderColor:'red',
      borderWidth:2,
      padding:3,
      margin:20,
       
    },
    img:{
        margin:20,
    }


})