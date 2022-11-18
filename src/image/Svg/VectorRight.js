import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function VectorRight(props) {
  return (
    <Svg
      width={10}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M1.095 14.22a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM8.375 8l.53.53a.75.75 0 0 0 0-1.06l-.53.53ZM2.155.72a.75.75 0 1 0-1.06 1.06L2.155.72Zm0 14.56 6.75-6.75-1.06-1.06-6.75 6.75 1.06 1.06Zm6.75-7.81L2.155.72l-1.06 1.06 6.75 6.75 1.06-1.06Z"
        // eslint-disable-next-line react/destructuring-assignment
        fill={props.color}
      />
    </Svg>
  );
}

export default VectorRight;
