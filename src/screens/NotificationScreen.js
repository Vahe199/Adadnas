import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from 'components/Header';
import { NotificationIcon } from 'components/SVGComponent/NotificationIcon';
import { normalize } from 'global-styles/normalize';
import COLORS from 'constants/colors';
import { mainStyles } from 'global-styles/global-styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogOutIcon } from 'components/SVGComponent/Auth/LogOutIcon';
import { useGetNotification } from 'hooks/useGetNotification.hook';
import NewsCard from '../components/elements/NewCard';
import BorderCard from '../components/elements/BorderCard';

const NotificationScreen = ({ route: { params }, navigation }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unread, setUnread] = useState(null);
  const [page, setPage] = useState(1);

  const { notificationList, meta, isLoading, refresh } = useGetNotification({
    ...params,
    ...unread,
    page,
  });
  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem('my-key');
      navigation.replace('Home');
    } catch (e) {
      // error reading value
    }
  };

  const renderNotifications = useCallback(({ item, index }) => {
    return <NewsCard index={index} news={item} />;
  }, []);
  const renderNotificationsNotify = useCallback(({ item, index }) => {
    return <BorderCard item={item} index={index} />;
  }, []);
  const onLoadMore = p => {
    console.log(page, 555);
    // setPage(page + 1);
  };

  const gameItemExtractorKey = (item, index) => {
    return index.toString();
  };

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
                onPress={() => {
                  setShowNotifications(!showNotifications);
                  setUnread(showNotifications ? null : { unread: 1 });
                }}>
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
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.secondaryLight}
          style={{ marginTop: '80%' }}
        />
      ) : showNotifications ? (
        <View style={[mainStyles.content]}>
          <FlatList
            data={notificationList || []}
            renderItem={renderNotificationsNotify}
            keyExtractor={gameItemExtractorKey}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0.3}
          />
        </View>
      ) : (
        <FlatList
          data={notificationList || []}
          renderItem={renderNotifications}
          contentContainerStyle={{
            paddingBottom: normalize(60),
          }}
        />
      )}

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
