import React from 'react';
import { mainStyles } from 'global-styles/global-styles';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../constants/colors';
import { Image, Text, View } from 'react-native';
import Button from '../components/elements/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');

      if (jsonValue) {
        const data = JSON.parse(jsonValue);
        navigation.replace('Notification', {
          user_id: data?.user_id,
          token: data?.token,
        });
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
  const handleStarted = () => {
    navigation.navigate('LogIn');
  };

  return (
    <LinearGradient
      style={mainStyles.flex}
      colors={[COLORS.white, COLORS.primary]}>
      <View style={[mainStyles.flex]}>
        <Image
          source={require('../assets/cropped-Adanas-logo.png')}
          style={{ marginTop: 40 }}
        />
        <View>
          <Image
            source={require('../assets/images/cat-3.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: '-15deg' },
              ],
            }}
          />
          <Image
            source={require('../assets/images/cat-2.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: '-5deg' },
              ],
            }}
          />
          <Image
            source={require('../assets/images/cat-4.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: '15deg' },
              ],
            }}
          />
          <Image
            source={require('../assets/images/cat-5.jpg')}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: 'absolute',
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: '-15deg' },
              ],
            }}
          />
        </View>
        {/*  content  */}
        <View
          style={{
            paddingHorizontal: 22,
            position: 'absolute',
            top: 360,
            width: '100%',
          }}>
          <Text style={[mainStyles.mainTitle]}>Let's Get</Text>
          <Text style={[mainStyles.mainStarted]}>Started</Text>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}>
              Be part of our community!
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}>
              Join now to unlock exclusive offers and stay informed about our
              latest products and updates.
            </Text>
          </View>
          <Button
            title={'Join Now'}
            onPress={handleStarted}
            style={{
              marginTop: 22,
              width: '100%',
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
