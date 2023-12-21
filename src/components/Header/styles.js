import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { normalize } from 'global-styles/normalize';
import COLORS from 'constants/colors';

const Styles = theme => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: insets.top + normalize(6),
      paddingBottom: normalize(12),
      paddingHorizontal: normalize(16),
      backgroundColor: COLORS.primary,
    },
    icon_container: {
      marginRight: normalize(16),
      width: normalize(30),
      height: normalize(30),
      borderRadius: normalize(20),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export { Styles };
