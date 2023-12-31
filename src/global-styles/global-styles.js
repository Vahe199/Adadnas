import {StyleSheet} from 'react-native';
import COLORS from '../constants/colors';

export const mainStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  titleBlock: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  mainTitle: {
    color: COLORS.white,
    fontSize: 50,
    fontWeight: 800,
  },
  mainStarted: {
    color: COLORS.white,
    fontSize: 46,
    fontWeight: 800,
  },
});
