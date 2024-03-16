import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, LogIn, Notification, Webview } from '../screens';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Webview" component={Webview} />
    </Stack.Navigator>
  );
};

export default Route;
