import { isEmpty } from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function useInitialRoute() {
  let route;
  await AsyncStorage.getItem('token').then(token => {
    if (!isEmpty(token)) {
      route = 'Notification';
    } else {
      route = 'Home';
    }
  });

  return route;
}

export { useInitialRoute };
