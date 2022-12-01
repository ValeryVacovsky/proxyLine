import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckProxy(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M6.178 3.833H3.833A2.325 2.325 0 0 0 1.5 6.168v14a2.323 2.323 0 0 0 2.333 2.321h5.834"
        stroke="#FAC637"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.345 1.5h-7c-.644 0-1.167.522-1.167 1.167V5c0 .644.523 1.167 1.167 1.167h7c.644 0 1.167-.523 1.167-1.167V2.667c0-.645-.523-1.167-1.167-1.167ZM15.512 3.833h2.333-.012a2.323 2.323 0 0 1 2.334 2.322v4.666M19.665 15.22l2.613 4.655c.467.84.164 1.913-.676 2.38-.269.14-.56.222-.864.222H15.5v-.002a1.76 1.76 0 0 1-1.762-1.761c-.011-.304.07-.607.222-.864l2.613-4.666h-.011a1.736 1.736 0 0 1 2.38-.677c.28.152.501.385.665.665l.058.048Z"
        stroke="#FAC637"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckProxy;
