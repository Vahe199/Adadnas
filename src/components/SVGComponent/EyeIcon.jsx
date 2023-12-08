import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from '../../constants/colors';

const EyeIcon = ({show, ...props}) => {
  return (
    <>
      {show ? (
        <Svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
          <Path
            fill={COLORS.black}
            d="m3.81 13.066-.58.476.58-.476Zm16.375-2.132-.579.477.58-.477Zm-16.376 0 .58.477-.58-.477Zm16.376 2.132-.579-.477.58.477Zm-1.722.792a.75.75 0 1 0 1.069 1.053l-1.069-1.053Zm-7.582-8.52a.75.75 0 0 0 .233 1.482l-.233-1.481Zm1.116 11.912c-1.599 0-3.138-.709-4.487-1.68-1.343-.966-2.434-2.146-3.122-2.981l-1.158.954c.733.889 1.917 2.175 3.404 3.245 1.481 1.066 3.326 1.962 5.363 1.962v-1.5Zm0-10.5c1.6 0 3.138.709 4.487 1.68 1.343.966 2.435 2.146 3.122 2.981l1.158-.954c-.732-.889-1.917-2.175-3.404-3.245-1.48-1.066-3.326-1.962-5.363-1.962v1.5Zm-7.609 5.839a.91.91 0 0 1 0-1.178l-1.158-.954a2.41 2.41 0 0 0 0 3.085l1.158-.953Zm16.376.954a2.41 2.41 0 0 0 0-3.085l-1.158.953a.91.91 0 0 1 0 1.178l1.158.954Zm-1.158-.954c-.304.37-.69.809-1.143 1.27l1.069 1.052a20.8 20.8 0 0 0 1.232-1.368l-1.158-.954Zm-3.677 3.358c-1.213.775-2.551 1.303-3.932 1.303v1.5c1.763 0 3.38-.672 4.739-1.538l-.807-1.265Zm-11.54-4.536c.73-.888 1.917-2.164 3.375-3.16l-.846-1.238c-1.621 1.106-2.91 2.5-3.688 3.444l1.158.954Zm6.725-4.59a5.67 5.67 0 0 1 .883-.071v-1.5c-.379 0-.752.031-1.116.089l.233 1.481Z"
          />
          <Path
            stroke={COLORS.black}
            d="m3 3 18 18M11.223 14.895a3 3 0 0 1-2.121-2.122"
          />
        </Svg>
      ) : (
        <Svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
          <Path
            stroke={COLORS.black}
            d="M20.188 10.934a1.66 1.66 0 0 1 0 2.132C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934a1.66 1.66 0 0 1 0-2.132C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z"
          />
          <Path stroke={COLORS.black} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </Svg>
      )}
    </>
  );
};
export default EyeIcon;
