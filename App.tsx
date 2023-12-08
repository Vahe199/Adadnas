/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Route from './src/navigation/route';
import COLORS from './src/constants/colors';

function App() {
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
