/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Route from './src/navigation/route';
import COLORS from './src/constants/colors';

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={COLORS.primary}
      />
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </>
  );
}

export default App;
