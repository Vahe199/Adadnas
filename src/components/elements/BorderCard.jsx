import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLORS from 'constants/colors';
import { normalize } from 'global-styles/normalize';
import Underline from 'components/Underline';
import Point from '../../components/elements/Point';
import { push } from 'services/navigatio';

const BorderCard = ({ index, item, token }) => {
  const handlePress = url => {
    // Open the URL in the WebView
    push('Webview', { url: url });
  };
  return (
    <Animatable.View
      animation="fadeInDown"
      duration={index > 5 ? 5 * 200 : index === 0 ? 600 : index * 400}
      useNativeDriver>
      {!!index && <Underline />}
      <TouchableOpacity
        onPress={() =>
          handlePress(item?.url + `&not_id=${item?.id}&token=${token}`)
        }
        style={[styles.container]}>
        <Image
          source={{
            uri: item?.img,
          }}
          style={[styles.image]}
        />

        <View style={{ flex: 1 }}>
          <Text style={[styles.title]}>{item?.title || ''}</Text>
          <Text style={[styles.desc]}>{item?.message || ''}</Text>
        </View>
        {item?.status_mobile === '0' && <Point />}
      </TouchableOpacity>
    </Animatable.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: COLORS.black,
    marginRight: 10,
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
    color: COLORS.grey,
  },
});

export default BorderCard;
