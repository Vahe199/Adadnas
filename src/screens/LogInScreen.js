import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import EyeIcon from '../components/SVGComponent/EyeIcon';
import Button from '../components/Button';

const LogInScreen = ({navigation}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{marginVertical: 22}}>
          <Image source={require('../assets/cropped-Adanas-logo.png')} />
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.black,
            }}>
            Go to Your Account
          </Text>
          <Text style={{fontSize: 16, color: COLORS.black}}>
            Get the news now!
          </Text>
        </View>
        <View style={{marginBottom: 12}}>
          <Text style={{fontSize: 16, fontWeight: 400, marginVertical: 8}}>
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
            }}>
            <TextInput
              placeholder={'Enter your email address'}
              placeholderTextColor={COLORS.grey}
              keyboardType={'email-address'}
              style={{width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginBottom: 12}}>
          <Text style={{fontSize: 16, fontWeight: 400, marginVertical: 8}}>
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
              style={{width: '100%'}}
              secureTextEntry={!showPass}
            />
            <TouchableOpacity
              onPress={() => setShowPass(!showPass)}
              style={{position: 'absolute', right: 12, width: 24, height: 24}}>
              <EyeIcon show={showPass} />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title={'Log In'}
          onPress={() => navigation.navigate('Notification')}
          filled
          style={{marginTop: 18, marginBottom: 4}}
        />
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;
