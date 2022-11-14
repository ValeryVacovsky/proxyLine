import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HeaderProxy(props) {
  return (
    <Svg
      width={19}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.125 7.5h1.125a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-1.125a1.875 1.875 0 1 1 0-3.75Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.25 11.25v1.875A1.875 1.875 0 0 1 14.375 15h-9.75a1.875 1.875 0 0 1-1.875-1.875v-7.5A1.875 1.875 0 0 1 4.625 3.75h9.75a1.875 1.875 0 0 1 1.875 1.875V7.5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeaderProxy;
