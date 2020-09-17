import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import SendSMS, {send} from 'react-native-sms';

const App = () => {
  const sendMsg = () => {
    SendSMS.send(
      {
        //Message body
        body: 'testing send message',
        //Recipients Number
        recipients: ['01035855166'],
        //An array of types that would trigger a "completed" response when using android
        successTypes: ['sent', 'queued'],
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
      <Text>testing!..</Text>
      <Button title="send Msg" onPress={sendMsg.bind(this)} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
