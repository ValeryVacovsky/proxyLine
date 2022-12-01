import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ReadTrash(props) {
  return (
    <Svg
      width={15}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M10.156 14.75H4.844a1.688 1.688 0 0 1-1.683-1.558l-.724-9.41h10.126l-.724 9.41a1.687 1.687 0 0 1-1.683 1.558v0ZM13.5 3.781h-12M5.39 1.25h4.22a.844.844 0 0 1 .843.844V3.78H4.547V2.094a.844.844 0 0 1 .844-.844v0ZM8.977 7.156v4.219M6.023 7.156v4.219"
        stroke="#E23A3A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ReadTrash;
