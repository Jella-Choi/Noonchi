import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {Block} from 'galio-framework';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';

class mapView extends Component {
  static navigationOptions = {header: null};

  constructor() {
    super();
  }
  state = {
    person: 60,
  };

  sendPerson = () => {
    if (this.state.person > 120) {
      this.props.navigation.navigate('CrowdRed', {
        person: this.state.person,
      });
    } else if (this.state.person > 60) {
      this.props.navigation.navigate('CrowdYellow', {
        person: this.state.person,
      });
    } else {
      this.props.navigation.navigate('CrowdGreen', {
        person: this.state.person,
      });
    }
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {ph: 100}; //사람이 많을 경우
  // }

  render() {
    return (
      <View style={styles.screen}>
        {/* <Block flex style={styles.map}> */}

        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.450227,
            longitude: 126.653491,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 37.450227, longitude: 126.653491}}
            title="인하대학교 용현캠퍼스"
            description="아래 버튼을 눌러 상세보기로 넘어가기"
            onPress={this.sendPerson.bind(this)}>
            {/* <Image
              source={require('../assets/images/logo.png')}
              style={{height: 45, width: 45}}
            /> */}
          </Marker>
          <Marker
            coordinate={{latitude: 37.447137, longitude: 126.650854}}
            title="홈플러스"
            description="아래 버튼을 눌러 상세보기로 넘어가기"
            onPress={() => this.props.navigation.navigate('close')}>
            {/* <Image
              source={require('../assets/images/logo.png')}
              style={{height: 45, width: 45}}
            /> */}
          </Marker>
          <Marker
            coordinate={{latitude: 37.451277, longitude: 126.657957}}
            title="소블링카페"
            description="아래 버튼을 눌러 상세보기로 넘어가기"
            onPress={() => this.props.navigation.navigate('RED')}>
            {/* <Image
              source={require('../assets/images/logo.png')}
              style={{height: 45, width: 45}}
            /> */}
          </Marker>
          <Marker
            coordinate={{latitude: 37.447776, longitude: 126.659533}}
            title="인하대학교 2생활관"
            description="아래 버튼을 눌러 상세보기로 넘어가기"
            onPress={() => this.props.navigation.navigate('YELLOW')}>
            {/* <Image
              source={require('../assets/images/logo.png')}
              style={{height: 45, width: 45}}
            /> */}
          </Marker>
        </MapView>
        {/* 
        <TouchableOpacity4r
          activeOpacity={0.5}
          style={styles.qrbtn}
          onPress={() => this.props.navigation.navigate('QR 체크인')}>
          <Image
            style={styles.qrimg}
            source={require('../assets/images/qr-code-48.png')}
          />
        </TouchableOpacity> */}

        {/* </Block> */}

        <Button
          color="purple"
          title="QR 체크인"
          onPress={() =>
            this.props.navigation.navigate('QR 체크인', {
              person: this.state.person,
            })
          }
        />
      </View>
    );
  }
}

export default mapView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  qrimg: {
    width: 40,
    height: 40,
    marginLeft: 17,
  },
  qrbtn: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignContent: 'center',

    borderWidth: 0,
    borderColor: '#555555',
    borderRadius: 100,

    marginTop: 750,
    marginLeft: 330,
    width: 75,
    height: 75,
    //alignItems: 'center',
    //justifyContent: 'flex-end',
  },

  map: {
    // position: "relative",
    flex: 1,
    padding: 0,
    //marginHorizontal: 0,
    //marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    //backgroundColor: 'skyblue',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
});
