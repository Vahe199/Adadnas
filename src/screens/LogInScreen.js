import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import EyeIcon from '../components/SVGComponent/EyeIcon';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from 'hooks/useAuth.hook';

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const { mutate } = useAuth(
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
      return () => null;
    }, []),
  );
  const handleCheckEmail = val => {
    if (!val) {
      setErrors({ ...errors, email: 'Email is required.' });
    } else if (!/\S+@\S+\.\S+/.test(val)) {
      setErrors({ ...errors, email: 'Email is invalid.' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const handleCheckPass = val => {
    if (!val) {
      setErrors({ ...errors, password: 'Password is required.' });
    } else if (password.length < 5) {
      setErrors({
        ...errors,
        password: 'Password must be at least 6 characters.',
      });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };

  const logIn = async () => {
    if (errors?.email || errors?.password) return;
    if (!email) {
      setErrors({ ...errors, email: 'Email is required.' });
      return;
    }

    if (!password) {
      setErrors({ ...errors, password: 'Password is required.' });
      return;
    }

    mutate({ password, email });
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
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
            Email address
          </Text>
          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
              position: 'relative',
            }}>
            <TextInput
              placeholder={'Enter your email address'}
              placeholderTextColor={COLORS.grey}
              keyboardType={'email-address'}
              style={{ width: '100%' }}
              value={email}
              onChangeText={text => {
                setEmail(text);
                handleCheckEmail(text);
              }}
            />
            <Text
              style={{
                color: COLORS.red,
                fontSize: 12,
                position: 'absolute',
                left: 0,
                top: 50,
              }}>
              {errors?.email}
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
            Password
          </Text>
          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder={'Enter your password'}
              placeholderTextColor={COLORS.grey}
              style={{ width: '100%' }}
              secureTextEntry={!showPass}
              value={password}
              onChangeText={text => {
                setPassword(text);
                handleCheckPass(text);
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
            <Text
              style={{
                color: COLORS.red,
                fontSize: 12,
                position: 'absolute',
                left: 0,
                top: 50,
              }}>
              {errors?.password}
            </Text>
          </View>
        </View>
        <Button
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
