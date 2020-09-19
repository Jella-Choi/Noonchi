import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';

function confirmView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>confirmView</Text>
      <Button title="Go to msg" onPress={() => navigation.navigate('Msg')} />
    </View>
  );
}

export default confirmView;
