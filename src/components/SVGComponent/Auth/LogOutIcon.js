import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from 'global-styles/normalize';
import COLORS from 'constants/colors';

const LogOutIcon = ({ width, height, color, ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || normalize(20)}
      height={height || normalize(24)}
      fill="none"
      {...props}>
      <Path
        stroke={color || COLORS.greyLight}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 17 5-5m0 0-5-5m5 5H9m0-9H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21H9"
      />
    </Svg>
  );
};

export { LogOutIcon };
