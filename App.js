import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TentangAplikasiScreen from './screens/TentangAplikasiScreen';
import HomeScreen from './screens/HomeScreen';
import KostCewekScreen from './screens/KostCewekScreen';
import KostCowokScreen from './screens/KostCowokScreen';
import CalculateScreen from './screens/CalculateScreen';
import Thanks from './screens/Thanks';

import { createStackNavigator, createAppContainer } from 'react-navigation';


const navigator = createStackNavigator({
  TentangAplikasi: TentangAplikasiScreen,
  Cewek: KostCewekScreen,
  Home: HomeScreen,
  Cowok: KostCowokScreen,
  Calculate: CalculateScreen,
  trims: Thanks
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Kost Finder'
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
