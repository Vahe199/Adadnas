import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, LogIn, Notification } from '../screens';
import { useInitialRoute } from 'hooks/useInitialRoute';

const Stack = createNativeStackNavigator();
const Route = () => {
  const route = useInitialRoute();
  console.log(route, 'ROUTE');
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
    </Stack.Navigator>
  );
};

export default Route;
