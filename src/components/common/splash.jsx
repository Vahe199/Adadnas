import React from 'react';
import {ActivityIndicator, useWindowDimensions, View} from 'react-native';

const Splash = () => {
  const {height, width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        position: 'absolute',
        width: width / 1.1,
        top: height * 0.3,
        elevation: 20,
      }}>
      <ActivityIndicator size="large" color="#01B0F1" />
    </View>
  );
};
export default Splash;
