import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class close extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.emoji}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/images/Red_emoji.jpg')}
          />
        </View>
        <Text style={styles.percent}> 영업 시간이 아닙니다.</Text>
        <Text style={styles.person}> 오전 9시 ~ 오후 9시 영업</Text>
      </View>
    );
  }
}

export default close;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'purple',
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
    marginLeft: 40,

    color: 'purple',
    fontSize: 37,
  },
  person: {
    marginTop: 30,
    marginLeft: 80,

    color: 'purple',
    fontSize: 22,
  },
});
