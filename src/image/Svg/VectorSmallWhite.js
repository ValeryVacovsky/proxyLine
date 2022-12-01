import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function VectorSmallWhite(props) {
  return (
    <Svg
      width={6}
      height={11}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M.22 9.47a.75.75 0 1 0 1.06 1.06L.22 9.47ZM5.25 5.5l.53.53a.75.75 0 0 0 0-1.06l-.53.53ZM1.28.47A.75.75 0 0 0 .22 1.53L1.28.47Zm0 10.06 4.5-4.5-1.06-1.06-4.5 4.5 1.06 1.06Zm4.5-5.56L1.28.47.22 1.53l4.5 4.5 1.06-1.06Z"
        fill="#636363"
      />
    </Svg>
  );
}

export default VectorSmallWhite;
