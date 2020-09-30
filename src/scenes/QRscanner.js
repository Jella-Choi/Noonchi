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
  // constructor(props) {
  //   super(props);
  //   this.state = {person: 0};
  // }

  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };

  render() {
    const {person} = this.props.route.params;

    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        //flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>QR code를 인식하여 주십시오.</Text>
        }
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => {
              if (person + 1 > 120) {
                this.props.navigation.navigate('CrowdRed', {
                  person: person + 1,
                });
              } else if (person + 1 > 60) {
                this.props.navigation.navigate('CrowdYellow', {
                  person: person + 1,
                });
              } else {
                this.props.navigation.navigate('CrowdGreen', {
                  person: person + 1,
                });
              }
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
    fontSize: 18,
    color: '#ffffff',
  },
  buttonTouchable: {
    marginTop: 10,
    padding: 18,
    //padding: 16,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
});

export default QRScanner;
