/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Route from './src/navigation/route';
import COLORS from './src/constants/colors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { navigationRef } from './src/services/navigatio';

function App() {
  const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <NavigationContainer ref={navigationRef}>
          <Route />
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;
