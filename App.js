import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import loadingView from './src/scenes/loadingView';
import mapView from './src/scenes/mapView';
import crowdView from './src/scenes/crowdView';
import confirmView from './src/scenes/confirmView';
import msgView from './src/scenes/msgView';
import QRscanner from './src/scenes/QRscanner';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={loadingView} />
        <Stack.Screen name="Map" component={mapView} />
        <Stack.Screen name="Crowd" component={crowdView} />
        <Stack.Screen name="Confirm" component={confirmView} />
        <Stack.Screen name="Msg" component={msgView} />
        <Stack.Screen name="QR" component={QRscanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
