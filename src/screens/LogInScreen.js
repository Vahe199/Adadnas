import React, { useState } from 'react';
import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import EyeIcon from '../components/SVGComponent/EyeIcon';
import Button from '../components/elements/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from 'hooks/useAuth.hook';
import { mainStyles } from 'global-styles/global-styles';
import {
  NotificationListener,
  requestUserPermission,
} from 'helpers/pushnotification_helpers';

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const { mutate, isPending } = useAuth(
    async ({ data }) => {
      if (data?.message) {
        setErrors({ email: data.message, password: data.message });
      } else if (data?.status === 'success') {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem('my-key', jsonValue);
          navigation.navigate('Notification', {
            user_id: data?.user_id,
            token: data?.token,
          });
        } catch (e) {
          // saving error const
        }
      }
    },
    () => {
      setErrors({
        ...errors,
        password: 'something went wrong !',
      });
    },
  );
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      if (jsonValue) {
        navigation.replace('Notification');
      }
    } catch (e) {
      // error reading value
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
      NotificationListener();
      requestUserPermission();

      return () => null;
    }, []),
  );

  const handleCheckTyping = (val, type) => {
    if (type === 'email') {
      if (!val) {
        setErrors({ email: 'Email is required.' });
      } else if (!/\S+@\S+\.\S+/.test(val)) {
        setErrors({ ...errors, email: 'Email is invalid.' });
      } else {
        setErrors({
          password: errors?.password?.includes('incorrect')
            ? ''
            : errors?.password,
          email: '',
        });
      }
    } else if (type === 'password') {
      if (!val) {
        setErrors({ password: 'Password is required.' });
      } else if (val.length < 5) {
        setErrors({
          ...errors,
          password: 'Password must be at least 6 characters.',
        });
      } else {
        setErrors({
          email: errors?.email?.includes('incorrect') ? '' : errors?.email,
          password: '',
        });
      }
    } else {
      setErrors({});
    }
  };

  const logIn = async () => {
    const device_id = await AsyncStorage.getItem('fcmtoken');
    const device_type = Platform.OS;
    if (errors?.email || errors?.password) return;
    if (!email) {
      setErrors({ ...errors, email: 'Email is required.' });
      return;
    }

    if (!password) {
      setErrors({ ...errors, password: 'Password is required.' });
      return;
    }

    mutate({ password, email, device_id, device_type });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Image source={require('../assets/cropped-Adanas-logo.png')} />
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.black,
            }}>
            Get the news now!
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Please enter your details.
          </Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={[mainStyles.inputLabel]}>Email address</Text>
          <View style={[mainStyles.inputWrapper]}>
            <TextInput
              placeholder={'Enter your email address'}
              placeholderTextColor={COLORS.grey}
              keyboardType={'email-address'}
              style={[mainStyles.textInput]}
              value={email}
              onChangeText={text => {
                setEmail(text);
                handleCheckTyping(text, 'email');
              }}
            />
            <Text style={[mainStyles.errorMsg]}>{errors?.email}</Text>
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={[mainStyles.inputLabel]}>Password</Text>
          <View style={[mainStyles.inputWrapper]}>
            <TextInput
              placeholder={'Enter your password'}
              placeholderTextColor={COLORS.grey}
              style={[mainStyles.textInput]}
              secureTextEntry={!showPass}
              value={password}
              onChangeText={text => {
                setPassword(text);
                handleCheckTyping(text, 'password');
              }}
            />
            <TouchableOpacity
              onPress={() => setShowPass(!showPass)}
              style={{
                position: 'absolute',
                right: 12,
                width: 24,
                height: 24,
              }}>
              <EyeIcon show={showPass} />
            </TouchableOpacity>
            <Text style={[mainStyles.errorMsg]}>{errors?.password}</Text>
          </View>
        </View>
        <Button
          disabled={isPending}
          title={'Sign In'}
          onPress={logIn}
          filled
          style={{ marginTop: 18, marginBottom: 4 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;
