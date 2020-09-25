import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {Block, theme} from 'galio-framework';
//import {Images, argonTheme} from '../constants';
//import {HeaderHeight} from '../constants/utils';
import LinearGradient from 'react-native-linear-gradient';

class test extends Component {
  render() {
    return this.props.num < 0 ? <Text>음수</Text> : <Text>양수</Text>;
  }
}

class loadingView extends Component {
  componentDidMount = async () => {
    setTimeout(() => {
      this.props.navigation.navigate('Map');
    }, 2000);
  };

  loading = () => {
    if (this.state.isLoading) {
      return;
    } else {
      return;
    }
  };
  render() {
    return (
      <View style={styles.screen}>
        <LinearGradient
          style={[styles.instagramButton, {width: '100%', height: '100%'}]}
          colors={['#4568DC', '#B06AB3']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          {/* /{ *<Button
            title="go to map"
            onPress={() => this.props.navigation.navigate('Map')}
          />} */}
          <Image
            source={require('../assets/images/logo_transparent.png')}
            style={styles.logo}
          />
        </LinearGradient>
      </View>
    );
  }
}

export default loadingView;

const styles = StyleSheet.create({
  instagramButton: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  screen: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  Button: {
    width: 100,
    height: 28,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  logo: {
    marginTop: 100,
    width: 300,
    height: 300,
  },
  map: {
    // position: "relative",
    flex: 1,
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'skyblue',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
});
