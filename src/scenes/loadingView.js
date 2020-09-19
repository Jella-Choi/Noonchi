import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function loadingView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>loadingView</Text>
      <Button title="Go to map" onPress={() => navigation.navigate('Map')} />
    </View>
  );
}

export default loadingView;

const styles = StyleSheet.create({});
