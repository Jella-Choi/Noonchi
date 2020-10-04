import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class RED extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.emoji}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/images/Red_emoji.jpg')}
          />
        </View>
        <Text style={styles.percent}>88%</Text>
        <Text style={styles.person}> 44 / 50 명</Text>
      </View>
    );
  }
}

export default RED;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'red',
    opacity: 0.5,
    zIndex: 2,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  emoji: {
    width: 30,
    height: 100,
  },
  tinyLogo: {
    resizeMode: 'contain',
    width: 420,
    height: 840,
    //width: 100,
  },
  percent: {
    marginTop: 370,
    marginLeft: 160,

    color: 'red',
    fontSize: 60,
  },
  person: {
    marginTop: 40,
    marginLeft: 160,

    color: 'red',
    fontSize: 20,
  },
});
