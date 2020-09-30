import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class crowdYellow extends Component {
  render() {
    const {person} = this.props.route.params;
    return (
      <View style={styles.screen}>
        <View style={styles.emoji}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/images/Yellow_emoji.jpg')}
          />
        </View>
        <Text>{((Number(person) / 200) * 100).toFixed(0)} % </Text>
        <Text style={styles.percent}> {person} / 200 명</Text>
      </View>
    );
  }
}

export default crowdYellow;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'yellow',
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
    marginTop: 380,
    marginLeft: 128,

    color: '#798219',
    fontSize: 68,
  },
});
