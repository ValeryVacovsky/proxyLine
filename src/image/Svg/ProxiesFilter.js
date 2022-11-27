import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ProxiesFilter(props) {
  return (
    <Svg
      width={15}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M4.591 1.659a2.25 2.25 0 1 1-3.182 3.182 2.25 2.25 0 0 1 3.182-3.182ZM13.5 3.25H5.25M13.591 9.159a2.25 2.25 0 1 1-3.182 3.182 2.25 2.25 0 0 1 3.182-3.182ZM1.5 10.75h8.25"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ProxiesFilter;
