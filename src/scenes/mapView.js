import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {Block} from 'galio-framework';
import {TouchableOpacity} from 'react-native-gesture-handler';

class mapView extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Block flex style={styles.map}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.qrbtn}
            onPress={() => this.props.navigation.navigate('QR 체크인')}>
            <Image
              style={styles.qrimg}
              source={require('../assets/images/qr-code-48.png')}
            />
          </TouchableOpacity>
        </Block>

        <Button
          color="purple"
          title="Go to crowd"
          onPress={() => this.props.navigation.navigate('Crowd')}
        />
      </View>
    );
  }
}

export default mapView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  qrimg: {
    width: 40,
    height: 40,
    marginLeft: 17,
  },
  qrbtn: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignContent: 'center',

    borderWidth: 0,
    borderColor: '#555555',
    borderRadius: 100,

    marginTop: 750,
    marginLeft: 330,
    width: 75,
    height: 75,
    //alignItems: 'center',
    //justifyContent: 'flex-end',
  },

  map: {
    // position: "relative",
    flex: 1,
    padding: 0,
    //marginHorizontal: 0,
    //marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'skyblue',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
});
