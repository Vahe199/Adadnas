import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from 'global-styles/normalize';
import Colors from 'constants/colors';

const ArrowLeft = ({ width, height, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M22 12H2m0 0l7.778 8M2 12l7.778-8"
        stroke={color || Colors.black}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { ArrowLeft };
