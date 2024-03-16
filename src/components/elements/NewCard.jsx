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
    color: COLORS.black,
  },
  desc: {
    fontSize: 13,
    marginTop: 5,
    color: COLORS.grey,
    overflow: 'hidden',
    maxHeight: 60,
  },
});

const NewsCard = ({ news, index, token }) => {
  const handlePress = url => {
    // Open the URL in the WebView
    push('Webview', { url: url });
  };
  // const message1 =
  //   news?.message?.length > 100 ? news?.message?.splice(0, 100) : '22';

  const message = !news.message.length
    ? ''
    : news.message.length > 70
    ? news.message.slice(0, 70) + '...'
    : news.message;
  const title = !news.title.length
    ? ''
    : news.title.length > 25
    ? news.title.slice(0, 25) + '...'
    : news.title;

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
          <Text style={[styles.title]}>{title || ''}</Text>
          <Text style={[styles.desc]}>{message || ''}</Text>
        </View>
        {news?.status_mobile === '0' && <Point />}
      </TouchableOpacity>
      {/*{length === index ? null : <Underline />}*/}
    </Animatable.View>
  );
};

export default NewsCard;
