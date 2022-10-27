import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DatabaseButtom = props => (
  <Svg
    width={15}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M.125 3.058c0-.121.067-.32.378-.583.308-.26.79-.523 1.441-.755 1.297-.463 3.13-.762 5.184-.762 2.054 0 3.887.299 5.184.762.651.232 1.134.495 1.442.755.31.262.377.462.377.583 0 .12-.066.32-.377.583-.308.26-.79.522-1.442.755-1.297.463-3.13.761-5.184.761-2.054 0-3.887-.298-5.184-.761C1.294 4.163.811 3.9.503 3.64c-.311-.263-.378-.462-.378-.583Z"
      fill={props.color}
    />
    <Path
      d="M12.732 5.573a6.94 6.94 0 0 0 1.4-.663v2.507c0 .12-.067.32-.378.583-.308.26-.79.522-1.442.755-1.297.463-3.13.761-5.184.761-2.054 0-3.887-.298-5.184-.761C1.294 8.522.811 8.26.503 8c-.311-.263-.378-.462-.378-.583V4.91c.398.255.874.475 1.399.663 1.464.523 3.446.834 5.604.834 2.159 0 4.14-.311 5.604-.834Z"
      fill={props.color}
    />
    <Path
      d="M.125 9.269v2.507c0 .12.067.32.378.583.308.26.79.522 1.441.755 1.297.463 3.13.761 5.184.761 2.054 0 3.887-.298 5.184-.761.651-.233 1.134-.495 1.442-.755.31-.263.377-.462.377-.583V9.269a6.94 6.94 0 0 1-1.399.663c-1.464.523-3.445.834-5.604.834-2.159 0-4.14-.311-5.604-.834-.525-.188-1-.408-1.399-.663Z"
      fill={props.color}
    />
  </Svg>
);

export default DatabaseButtom;
