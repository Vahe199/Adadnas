import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Underline from 'components/Underline';
import Header from 'components/Header';
import { NotificationIcon } from 'components/SVGComponent/NotificationIcon';
import { normalize } from 'global-styles/normalize';
import * as Animatable from 'react-native-animatable';
import COLORS from 'constants/colors';
import { mainStyles } from 'global-styles/global-styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogOutIcon } from 'components/SVGComponent/Auth/LogOutIcon';
import { useGetNotification } from 'hooks/useGetNotification.hook';

const mockData = [
  {
    unread: true,
    title: 'Արևային ակնոցներ և հագուստ',
    description: 'Կանացի թրենդային արևային ակնոցներ և հագուստ',
    img: require('../assets/images/glases.jpg'),
    url: 'https://adanas.codewave.am/kanaci-trendayin-arevayin-aknocner-ev-hagust/',
  },
  {
    unread: true,
    title: 'Բացահայտեք նորաձևության',
    description: 'Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում,',
    img: require('../assets/images/post-1.webp'),
    url: 'https://adanas.codewave.am/news/',
  },
  {
    unread: false,
    title: 'Դահուկային գործիքներ',
    description: 'Դահուկային գործիքների ամբողջական հավաքածու բոլորի համար',
    img: require('../assets/images/5-3.webp'),
    url: 'https://adanas.codewave.am/news/',
  },
  {
    unread: false,
    title: 'Նորաձևության միտումները',
    description: 'Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում,',
    img: require('../assets/images/post-2.jpg'),
    url: 'https://adanas.codewave.am/news/',
  },
  {
    unread: false,
    title: 'Կանանց նորաձևության',
    description: 'Բացահայտեք կանանց նորաձևության միտումները աշնանը',
    img: require('../assets/images/cover_lookbookV4_copy.jpg'),
    url: 'https://adanas.codewave.am/news/',
  },
  {
    unread: false,
    title: 'IPad և աքսեսուարներ',
    description: 'Բացահայտեք նորաձևության IPad և աքսեսուարներ',
    img: require('../assets/images/post-4.webp'),
    url: 'https://adanas.codewave.am/news/',
  },
];

const unreadCount = 2;
const NotificationScreen = ({ navigation }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const handlePress = url => {
    // Specify the URL you want to open

    // Open the URL in the default browser
    Linking.openURL(url);
  };

  const { notificationList, isLoading, meta } = useGetNotification();
  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem('my-key');
      navigation.replace('Home');
    } catch (e) {
      // error reading value
    }
  };

  const renderNotifications = useCallback(({ item, index }) => {
    return (
      <Animatable.View
        animation="fadeInDown"
        duration={index > 5 ? 5 * 200 : index === 0 ? 600 : index * 400}
        useNativeDriver>
        <TouchableOpacity
          onPress={() => handlePress(item?.url)}
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: normalize(16),
          }}>
          <Image
            source={{
              uri: item?.img,
            }}
            style={{
              height: 40,
              width: 40,
              borderRadius: 8,
              marginTop: 15,
              marginRight: 10,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                lineHeight: 20,
              }}>
              {item?.message || ''}
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 20,
                marginTop: 5,
                color: COLORS.grey,
              }}>
              {item?.title || ''}
            </Text>
          </View>
          {item?.unread && (
            <View
              style={{
                width: normalize(8),
                height: normalize(8),
                borderRadius: normalize(4),
                backgroundColor: 'green',
              }}
            />
          )}
        </TouchableOpacity>
        {notificationList?.[index + 1] ? <Underline /> : null}
      </Animatable.View>
    );
  }, []);

  return (
    <View style={[mainStyles.flex]}>
      <Header
        containerStyle={{ justifyContent: 'space-between' }}
        logo={<Image source={require('../assets/cropped-Adanas-logo.png')} />}
        rightIcon
        renderRightIcon={() => {
          return (
            <>
              <TouchableOpacity
                style={{ marginLeft: 'auto' }}
                activeOpacity={0.8}
                onPress={() => setShowNotifications(!showNotifications)}>
                <NotificationIcon />
                {!!meta?.unread_count && (
                  <View
                    style={{
                      width: normalize(12),
                      height: normalize(12),
                      borderRadius: normalize(6),
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      top: -normalize(5),
                      right: 0,
                    }}>
                    <Text
                      style={{ fontSize: normalize(8), color: COLORS.white }}>
                      {meta?.unread_count || 0}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={removeItem}
                style={{
                  marginRight: -normalize(10),
                  marginLeft: normalize(13),
                }}>
                <LogOutIcon />
              </TouchableOpacity>
            </>
          );
        }}
      />
      {showNotifications ? (
        <FlatList
          data={notificationList || []}
          renderItem={renderNotifications}
          contentContainerStyle={{
            paddingBottom: normalize(20),
          }}
        />
      ) : null}

      {showNotifications ? (
        ''
      ) : (
        <View style={[mainStyles.footer]}>
          <Text style={{ textAlign: 'center' }}>
            Copyright © 2023 Adanas | All Rights Reserved | Website by Dimark
          </Text>
        </View>
      )}
    </View>
  );
};

export default NotificationScreen;
