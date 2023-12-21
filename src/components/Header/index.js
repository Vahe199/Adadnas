import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './styles';
import { deviceInfo } from 'assets/deviceInfo';
import { normalize } from 'global-styles/normalize';

const Header = ({
  title = '',
  rightIcon = false,
  renderRightIcon,
  backButtonVisible = true,
  renderTitle,
  backIconContainer,
  containerStyle,
}) => {
  const styles = Styles();
  return (
    <View style={[styles.container, containerStyle]}>
      {renderTitle ? (
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
    </View>
  );
};

export default Header;
