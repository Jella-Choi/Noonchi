import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Button, CheckBox} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import {CheckBox} from 'react-native-elements';

class confirmView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      setSelection: false,
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.guide_title}>집합시설 출입을 위한</Text>
        <Text style={styles.guide_title}> QR 체크인을 시작합니다.</Text>
        <Text style={styles.guide}>
          감염병예방법 제 49조, 제 76조의 2에 따른 감염병 예방 및 감염 전파의
          차단을 위해 개인 정보 보호법 제 15조 및 제 17조에 따라 개인정보의
          수집, 이용, 제3자 제공에 동의합니다.
        </Text>

        <View style={styles.chkbox}>
          <View style={styles.chkitem}>
            <CheckBox
              value={this.state.checked}
              onValueChange={(value) => this.setState({checked: value})}
            />
            <Text style={styles.minitop}>전체 동의</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              margin: 5,
              borderBottomColor: '#a49da8',
            }}
          />

          <View style={styles.chkitem}>
            <CheckBox
              value={this.state.checked}
              onValueChange={(value) => this.setState({checked: value})}
            />
            <Text style={styles.mini}>[필수] 개인정보 수집 및 이용</Text>
          </View>

          <View style={styles.chkitem}>
            <CheckBox
              value={this.state.checked}
              onValueChange={(value) => this.setState({checked: value})}
              /*
              value={this.state.checked}
              onValueChange={() =>
                this.setState({checked: !this.state.setSelection})
              }
              */
            />
            <Text style={styles.mini}>[필수] 개인정보 제3자 제공</Text>
          </View>

          <View style={styles.chkitem}>
            <CheckBox
              value={this.state.checked}
              onValueChange={(value) => this.setState({checked: value})}
            />
            <Text style={styles.mini}>
              [필수] 보건복지부 개인정보 수집 및 이용
            </Text>
          </View>

          <View style={styles.chkitem}>
            <CheckBox
              value={this.state.checked}
              onValueChange={(value) => this.setState({checked: value})}
            />
            <Text style={styles.mini}>
              [필수] 보건복지부 개인정도 제3자 제공
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.msgBtn}
          onPress={() => this.props.navigation.navigate('Msg')}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            동의
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default confirmView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  guide_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6e736f',
    marginRight: 'auto',
    marginTop: 0,
    marginLeft: 7,
    //marginBottom: 'auto',
  },
  guide: {
    paddingTop: 10,
    fontSize: 14,
    color: '#a2a0a3',
    marginLeft: 10,
    marginTop: 8,
    //marginBottom: 'auto',
    marginRight: 7,
  },

  chkbox: {
    marginLeft: 5,
    marginTop: 60,
    padding: 10,
    //flex: 1,
    width: 400,
    height: 220,
    backgroundColor: '#dcd9de',
    opacity: 0.7,
    borderRadius: 10,
  },
  chkitem: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: 'row',
  },
  minitop: {
    fontSize: 17,
  },
  mini: {
    fontSize: 12,
    marginTop: 5,
  },
  msgBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'purple',
  },
});
