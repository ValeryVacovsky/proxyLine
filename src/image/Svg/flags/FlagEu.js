import * as React from 'react'
import Svg, { Defs, G, Path, Use } from 'react-native-svg'

const FlagEu = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480">
    <Defs>
      <G id="d">
        <G id="b">
          <Path id="a" d="m0-1-.3 1 .5.1z" />
          <Use transform="scale(-1 1)" xlinkHref="#a" />
        </G>
        <G id="c">
          <Use transform="rotate(72)" xlinkHref="#b" />
          <Use transform="rotate(144)" xlinkHref="#b" />
        </G>
        <Use transform="scale(-1 1)" xlinkHref="#c" />
      </G>
    </Defs>
    <Path fill="#039" d="M0 0h640v480H0z" />
    <G fill="#fc0" transform="translate(320 242.3) scale(23.7037)">
      <Use width="100%" height="100%" y={-6} xlinkHref="#d" />
      <Use width="100%" height="100%" y={6} xlinkHref="#d" />
      <G id="e">
        <Use width="100%" height="100%" x={-6} xlinkHref="#d" />
        <Use width="100%" height="100%" transform="rotate(-144 -2.3 -2.1)" xlinkHref="#d" />
        <Use width="100%" height="100%" transform="rotate(144 -2.1 -2.3)" xlinkHref="#d" />
        <Use width="100%" height="100%" transform="rotate(72 -4.7 -2)" xlinkHref="#d" />
        <Use width="100%" height="100%" transform="rotate(72 -5 .5)" xlinkHref="#d" />
      </G>
      <Use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#e" />
    </G>
  </Svg>
)

export default FlagEu
