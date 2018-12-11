import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './components/Homepage'
import MapScreen from './components/MapScreen'
import ImageComponent from './components/PhotoComponent'
import AnimComponent from './components/Animation'
import MapComponent from './components/MapComponent';

const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Maps: {
      screen: MapComponent
    },
    Photos: {
      screen: ImageComponent
    },
    Animation: {
      screen: AnimComponent
    }
  },
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(RootStack);

export default App;