import { Dimensions, PixelRatio } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const scale = SCREEN_WIDTH / 360;
const scaleHeight = SCREEN_HEIGHT / 800;

export const normalize = (size, forHeight) => {
  const newSize =
    SCREEN_WIDTH > 900 ? size : size * (forHeight ? scaleHeight : scale);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
