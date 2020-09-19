import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import SendSMS from 'react-native-sms';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/*
const msgView = ({navitation}) => {
  const sendMsg = () => {
    console.log('msg');
    SendSMS.send(
      {
        //Message body
        body: 'testing send message',
        //Recipients Number
        recipients: ['01035855166'],
        //An array of types that would trigger a "completed" response when using android
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true,
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  };

  return (
    <View>
      <Text>testing..</Text>
      <Button title="send Msg" onPress={sendMsg.bind(this)} />
      <Button
        title="Go to QRscanner"
        onPress={() => navigation.navigate('QR')}
      />
    </View>
  );
};
*/
function msgView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>msgView</Text>
      <Button
        title="go to QR scanner"
        onPress={() => navigation.navigate('QR')}
      />

      <Button title="sendMSG" />
    </View>
  );
}

export default msgView;

const styles = StyleSheet.create({});
