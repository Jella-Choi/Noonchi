import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const crowdView = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>show Crowd</Text>
      <Button title="go back home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default crowdView;

const styles = StyleSheet.create({});
