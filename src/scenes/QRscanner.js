import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';

function QRscanner({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Qrsanner</Text>

      <Button title="Go back home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default QRscanner;