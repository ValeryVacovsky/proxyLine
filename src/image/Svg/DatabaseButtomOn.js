import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DatabaseButtomOn(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M3.125 6.058c0-.121.067-.32.378-.583.308-.26.79-.523 1.441-.755 1.297-.463 3.13-.762 5.184-.762 2.054 0 3.887.299 5.184.762.651.232 1.134.495 1.442.755.31.262.377.462.377.583 0 .12-.067.32-.377.583-.308.26-.79.522-1.442.755-1.297.463-3.13.761-5.184.761-2.054 0-3.887-.298-5.184-.761-.65-.233-1.133-.495-1.441-.755-.311-.263-.378-.462-.378-.583Z"
        fill="#FAC637"
      />
      <Path
        d="M15.732 8.573a6.94 6.94 0 0 0 1.4-.663v2.507c0 .12-.068.32-.378.583-.308.26-.79.522-1.442.755-1.297.463-3.13.761-5.184.761-2.054 0-3.887-.298-5.184-.761-.65-.233-1.133-.495-1.441-.755-.311-.263-.378-.462-.378-.583V7.91c.398.255.874.475 1.399.663 1.464.523 3.446.834 5.604.834 2.159 0 4.14-.311 5.604-.834Z"
        fill="#FAC637"
      />
      <Path
        d="M3.125 12.269v2.507c0 .12.067.32.378.583.308.26.79.522 1.441.755 1.297.463 3.13.761 5.184.761 2.054 0 3.887-.298 5.184-.761.651-.233 1.134-.495 1.442-.755.31-.263.377-.462.377-.583v-2.507a6.944 6.944 0 0 1-1.399.663c-1.464.523-3.445.834-5.604.834-2.159 0-4.14-.311-5.604-.834-.525-.188-1-.408-1.399-.663Z"
        fill="#FAC637"
      />
    </Svg>
  );
}

export default DatabaseButtomOn;
