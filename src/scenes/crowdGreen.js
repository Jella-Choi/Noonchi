import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class crowdGreen extends Component {
  render() {
    const {person} = this.props.route.params;
    return (
      <View style={styles.screen}>
        <View style={styles.emoji}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/images/Green_emoji.jpg')}
          />
        </View>
        <Text style={styles.percent}>
          {((Number(person) / 200) * 100).toFixed(0)} %{' '}
        </Text>
        <Text style={styles.person}> {person} / 200 명</Text>
      </View>
    );
  }
}

export default crowdGreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'green',
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

    color: '#798219',
    fontSize: 60,
  },
  person: {
    marginTop: 40,
    marginLeft: 160,

    color: '#798219',
    fontSize: 20,
  },
});
