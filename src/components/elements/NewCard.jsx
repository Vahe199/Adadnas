import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLORS from 'constants/colors';
import Point from '../../components/elements/Point';
import { normalize } from 'global-styles/normalize';
import { push } from 'services/navigatio';

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 2,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(8),
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 8,

    marginRight: 10,
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

const NewsCard = ({ news, index, token }) => {
  const handlePress = url => {
    // Open the URL in the WebView
    push('Webview', { url: url });
  };
  return (
    <Animatable.View
      animation="fadeInDown"
      duration={index > 5 ? 5 * 200 : index === 0 ? 600 : index * 400}
      useNativeDriver>
      <TouchableOpacity
        onPress={() =>
          handlePress(news?.url + `?not_id=${news?.id}&token=${token}`)
        }
        style={[styles.container]}>
        <Image
          defaultSource={require('../../assets/images/newspaper.png')}
          source={{
            uri: news?.img,
          }}
          style={[styles.image]}
        />

        <View style={[styles.titleContainer]}>
          <Text style={[styles.title]}>{news?.title || ''}</Text>
          <Text style={[styles.desc]}>{news?.message || ''}</Text>
        </View>
        {news?.status_mobile === '0' && <Point />}
      </TouchableOpacity>
      {/*{length === index ? null : <Underline />}*/}
    </Animatable.View>
  );
};

export default NewsCard;
