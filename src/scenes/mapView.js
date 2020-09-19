import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';

function mapView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>mapView</Text>
      <Button
        title="Go to crowd"
        onPress={() => navigation.navigate('Crowd')}
      />

      <Button
        title="Go to confirm"
        onPress={() => navigation.navigate('Confirm')}
      />
    </View>
  );
}

export default mapView;
