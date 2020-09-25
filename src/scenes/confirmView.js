import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Button, CheckBox} from 'react-native';

class confirmView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      setSelection: false,
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.guide_title}>
          집합시설 출입을 위한 QR 체크인을 시작합니다.
        </Text>
        <Text style={styles.guide}>
          감염병예방법 제 49조, 제 76조의 2에 따른 감염병 예방 및 감염 전파의
          차단을 위해 개인 정보 보호법 제 15조 및 제 17조에 따라 개인정보의
          수집, 이용, 제3자 제공에 동의합니다.
        </Text>

        <View style={styles.chkbox}>
          <CheckBox
            value={this.state.isSelected}
            onValueChange={this.state.setSelection}
            style={styles.checkbox}
          />
          <Text style={styles}>[필수] 개인정보 수집 및 이용</Text>

          <Text>[필수] 개인정보 제3자 제공</Text>
          <Text>[필수] 보건복지부 개인정보 수집 및 이용</Text>
          <Text>[필수] 보건복지부 개인정도 제3자 제공</Text>
        </View>
        <Button
          title="Go to msg"
          onPress={() => this.props.navigation.navigate('Msg')}
        />
      </View>
    );
  }
}

export default confirmView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },

  guide_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6e736f',
    marginRight: 'auto',
    marginTop: 20,
    marginLeft: 7,
    marginBottom: 'auto',
  },
  guide: {
    paddingTop: 0,
    fontSize: 16,
    marginLeft: 10,
    marginTop: 0,
    marginBottom: 'auto',
    marginRight: 7,
  },

  chkbox: {
    backgroundColor: 'purple',
    opacity: 0.3,
    flex: 0.3,
    borderRadius: 10,
  },
});
