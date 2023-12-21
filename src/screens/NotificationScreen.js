import React, { Fragment, useCallback, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Underline from 'components/Underline';
import Header from 'components/Header';
import { NotificationIcon } from 'components/SVGComponent/NotificationIcon';
import { normalize } from 'global-styles/normalize';
import * as Animatable from 'react-native-animatable';
import COLORS from 'constants/colors';

const mockData = [
  { unread: true },
  { unread: true },
  { unread: false },
  { unread: false },
  { unread: false },
  { unread: false },
];

const unreadCount = 2;
const NotificationScreen = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const renderNotifications = useCallback(({ item, index }) => {
    return (
      <Animatable.View
        animation="fadeInDown"
        duration={index > 5 ? 5 * 200 : index === 0 ? 600 : index * 400}
        useNativeDriver>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: normalize(16),
          }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                lineHeight: 20,
              }}>
              Title
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 20,
                marginTop: 5,
              }}>
              Description
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
        </View>
        {mockData?.[index + 1] ? <Underline /> : null}
      </Animatable.View>
    );
  }, []);

  return (
    <View>
      <Header
        title={'Notifications'}
        rightIcon
        renderRightIcon={() => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowNotifications(!showNotifications)}>
              <NotificationIcon />
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
                <Text style={{ fontSize: normalize(8), color: COLORS.white }}>
                  {unreadCount}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {showNotifications ? (
        <FlatList
          data={mockData}
          renderItem={renderNotifications}
          contentContainerStyle={{
            paddingBottom: normalize(20),
          }}
        />
      ) : null}
    </View>
  );
};

export default NotificationScreen;
