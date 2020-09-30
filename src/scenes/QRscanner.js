import 'react-native-gesture-handler';
import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

class QRScanner extends Component {
  state = {
    person: 0,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {person: 0};
  // }

  updatePh = () => {
    this.setState({
      person: this.state.person + 1,
    });
    console.log(this.state.person);
  };

  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        //flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            {this.state.person} QR code를 인식하여 주십시오.
          </Text>
        }
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => {
              this.updatePh();
              this.props.navigation.navigate('Crowd');
            }}>
            <Text style={styles.buttonText}>confirm</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    paddingTop: 60,
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QRScanner;
