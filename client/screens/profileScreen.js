import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const ProfileScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />

          <Text style={styles.name}>Rajesh T</Text>
          <Text style={styles.userInfo}>rajesh@gmail.com </Text>
          <Text style={styles.userInfo}>Gachibowli </Text>
          <Text style={styles.userInfo}>9704401708</Text>

        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
    width: 390,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
    marginBottom: 4,
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
    marginBottom: 4,
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  }
});

export default ProfileScreen;