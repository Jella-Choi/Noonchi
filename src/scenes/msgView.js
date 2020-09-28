import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import SendSMS from 'react-native-sms';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

class msgView extends Component {
  state = {
    phone: '',
    setText: '',
  };

  sendMsg = () => {
    SendSMS.send(
      {
        body: '[본인확인] 인증번호는 333333입니다.',
        recipients: ['01035855166'],
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

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.item}>
          <Text style={styles.cate}>이름</Text>
          <TextInput
            style={styles.value}
            placeholder="             본인 이름 입력"></TextInput>
        </View>

        <View style={styles.item}>
          <Text style={styles.cate}>휴대폰번호</Text>
          <TextInput
            style={styles.value}
            placeholder="-없이  숫자만  입력"
            onChangeText={(phone) => setText(phone)}></TextInput>
        </View>

        <View style={styles.item}>
          <TouchableOpacity
            style={styles.msgBtn}
            onPress={this.sendMsg.bind(this)}

            //onPress={() => this.props.navigation.navigate('본인 인증')}>
          >
            <Text style={{fontSize: 16}}>인증 요청</Text>
          </TouchableOpacity>
          <TextInput
            secureTextEntry={true}
            style={styles.value}
            placeholder="     인증 번호 입력"></TextInput>
        </View>

        <TouchableOpacity
          style={styles.qrBtn}
          onPress={() => this.props.navigation.navigate('QR')}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default msgView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 230,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  item: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    borderBottomColor: '#bfbcc2',
    borderBottomWidth: 2,
  },
  cate: {
    color: '#565557',
    fontSize: 16,
    marginLeft: 30,
    margin: 10,
  },
  value: {
    height: 40,
    marginLeft: 25,

    borderColor: 'gray',
  },
  msgBtn: {
    height: 40,
    width: 100,
    backgroundColor: '#dcd9de',
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  qrBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    margin: 10,
    borderRadius: 2,
    backgroundColor: 'purple',
  },
});

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
