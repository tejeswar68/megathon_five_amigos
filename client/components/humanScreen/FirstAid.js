import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  Button, Card, Title, Paragraph } from 'react-native-paper'

const firstAid = () => {
  return (
    <View>
   <Card> <Card.Title title="Card Title" subtitle="Card Subtitle"  />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://medlineplus.gov/ency/images/ency/fullsize/8928.jpg' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
    </View>
  )
}

export default firstAid

const styles = StyleSheet.create({

    
})