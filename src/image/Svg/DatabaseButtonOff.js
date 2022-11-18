import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DatabaseButtonOff(props) {
  return (
    <Svg
      width={18}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M1.5 12.776c0 1.505 3.415 2.724 7.628 2.724s7.628-1.22 7.628-2.724V4.058c0-1.505-3.415-2.725-7.628-2.725S1.5 2.553 1.5 4.058v8.718Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.756 4.058c0 1.505-3.415 2.724-7.628 2.724S1.5 5.562 1.5 4.058M16.756 8.416c0 1.505-3.415 2.725-7.628 2.725S1.5 9.92 1.5 8.416"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DatabaseButtonOff;
