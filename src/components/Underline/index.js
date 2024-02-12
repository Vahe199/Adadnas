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
        width: '80%',
        marginLeft: 'auto',
        ...style,
      }}
    />
  );
};

export default Underline;
