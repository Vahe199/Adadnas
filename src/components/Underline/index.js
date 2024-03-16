import React from 'react';
import { View } from 'react-native';
import { normalize } from 'global-styles/normalize';
import COLORS from 'constants/colors';

const Underline = ({ height, color, style }) => {
  return (
    <View
      style={{
        height: height ? normalize(height) : normalize(1),
        backgroundColor: color || COLORS.grey,
        width: '75%',
        marginLeft: 'auto',
        marginRight: normalize(20),
        ...style,
      }}
    />
  );
};

export default Underline;
