import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckSpeed(props) {
  return (
    <Svg
      width={24}
      height={23}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M12 14.047a2.042 2.042 0 1 0 0-4.083 2.042 2.042 0 0 0 0 4.083ZM12 5.005v1.167M7.053 7.059l.817.828M13.447 10.559l3.5-3.5M7.917 17.255h8.166M19 12.005h-1.167M6.167 12.005H5"
        stroke="#FAC637"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.672 1.505v0A10.617 10.617 0 0 0 1.5 11.983v0a10.476 10.476 0 0 0 4.362 8.54h0a4.534 4.534 0 0 0 2.656.816h6.974v0a4.45 4.45 0 0 0 2.598-.79v0c4.725-3.357 5.834-9.908 2.477-14.633a10.494 10.494 0 0 0-8.895-4.41v0Z"
        stroke="#FAC637"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckSpeed;
