import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './styles';
import { deviceInfo } from 'assets/deviceInfo';
import { normalize } from 'global-styles/normalize';
import COLORS from 'constants/colors';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({
  title = '',
  logo,
  rightIcon = false,
  renderRightIcon,
  backButtonVisible = true,
  renderTitle,
  backIconContainer,
  containerStyle,
}) => {
  const styles = Styles();
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.container, containerStyle]}
      colors={[COLORS.white, COLORS.secondary, COLORS.primary]}>
      {logo ? (
        logo
      ) : renderTitle ? (
        renderTitle(title)
      ) : title ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: normalize(16),
              lineHeight: deviceInfo?.ios ? 0 : 24,
            }}>
            {title}
          </Text>
        </View>
      ) : null}
      {rightIcon && renderRightIcon()}
    </LinearGradient>
  );
};

export default Header;
