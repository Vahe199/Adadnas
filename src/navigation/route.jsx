import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, LogIn, Notification} from '../screens';
import COLORS from '../constants/colors';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
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
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.grey,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Route;
