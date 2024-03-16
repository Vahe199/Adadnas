import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import { normalize } from 'global-styles/normalize';

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
  content: {
    paddingBottom: normalize(10),
    maxHeight: normalize(500),
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  footer: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#5CA699',
  },
  line: {
    width: '100px',
    height: '2px',
    backgroundColor: '#262626',
    marginVertical: 5,
  },
  inputWrapper: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
    position: 'relative',
  },
  textInput: {
    width: '100%',
    color: COLORS.black,
    fontSize: 18,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  errorMsg: {
    color: COLORS.red,
    fontSize: 12,
    position: 'absolute',
    left: 0,
    top: 50,
  },
});
