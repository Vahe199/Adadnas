import React from 'react';
import { View } from 'react-native';
import { normalize } from 'global-styles/normalize';

const Point = ({ color = 'green', size = 8, marginVertical }) => {
  return (
    <View
      style={{
        width: normalize(size),
        height: normalize(size),
        borderRadius: normalize(size / 2),
        backgroundColor: color,
        marginVertical,
      }}
    />
  );
};
export default Point;
