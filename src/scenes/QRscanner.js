import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class QRscanner extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Go back home"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    );
  }
}

export default QRscanner;
