import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SendSMS from 'react-native-sms';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const MsgView = ({navitation}) => {
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
    </View>
  );
};

export default MsgView;

const styles = StyleSheet.create({});
