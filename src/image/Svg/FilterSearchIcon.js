import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function FilterSearchIcon(props) {
  return (
    <Svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M6.373 11.079a4.706 4.706 0 1 0 0-9.413 4.706 4.706 0 0 0 0 9.412ZM12.333 12.333 9.7 9.7"
        stroke="#4F4F4F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default FilterSearchIcon;
