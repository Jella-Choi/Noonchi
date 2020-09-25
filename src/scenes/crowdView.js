import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class crowdView extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>show Crowd</Text>
        <Button
          title="go back home"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    );
  }
}

export default crowdView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
