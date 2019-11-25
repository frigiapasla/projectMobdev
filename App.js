import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TentangAplikasiScreen from './screens/TentangAplikasiScreen';
import HomeScreen from './screens/HomeScreen';
import KostCewekScreen from './screens/KostCewekScreen';
import KostCowokScreen from './screens/KostCowokScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const navigator = createStackNavigator({
  TentangAplikasi: TentangAplikasiScreen,
  Cewek: KostCewekScreen,
  Home: HomeScreen,
  Cowok: KostCowokScreen
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
