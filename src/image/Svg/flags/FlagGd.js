import * as React from 'react'
import Svg, { Defs, G, Path, Use, Circle } from 'react-native-svg'

const FlagGd = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480">
    <Defs>
      <G id="c">
        <G id="b">
          <Path id="a" fill="#fcd116" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
          <Use transform="scale(-1 1)" xlinkHref="#a" />
        </G>
        <Use transform="rotate(72)" xlinkHref="#b" />
        <Use transform="rotate(144)" xlinkHref="#b" />
        <Use transform="rotate(216)" xlinkHref="#b" />
        <Use transform="rotate(288)" xlinkHref="#b" />
      </G>
    </Defs>
    <Path fill="#ce1126" d="M0 0h640v480H0z" />
    <Path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
    <Path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z" />
    <Circle cx={319.9} cy={240.1} r={57.6} fill="#ce1126" />
    <Use width="100%" height="100%" transform="matrix(52.8 0 0 52.8 320 240)" xlinkHref="#c" />
    <Use width="100%" height="100%" x={-100} transform="translate(-30.3)" xlinkHref="#d" />
    <Use id="d" width="100%" height="100%" transform="matrix(31.2 0 0 31.2 320 33.6)" xlinkHref="#c" />
    <Use width="100%" height="100%" x={100} transform="translate(30.3)" xlinkHref="#d" />
    <Path fill="#ce1126" d="M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45l-22.2 11.8z" />
    <Path
      fill="#fcd116"
      d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
    />
    <Use width="100%" height="100%" x={-100} transform="translate(-30.3 414.6)" xlinkHref="#d" />
    <Use width="100%" height="100%" transform="matrix(31.2 0 0 31.2 320 448.2)" xlinkHref="#c" />
    <Use width="100%" height="100%" x={100} transform="translate(30.3 414.6)" xlinkHref="#d" />
  </Svg>
)

export default FlagGd
