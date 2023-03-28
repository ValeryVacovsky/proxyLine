import * as React from 'react'
import Svg, { Path, G, Use } from 'react-native-svg'

const FlagHn = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480">
    <Path fill="#0073cf" d="M0 0h640v480H0z" />
    <Path fill="#fff" d="M0 160h640v160H0z" />
    <G id="c" fill="#0073cf" transform="translate(320 240) scale(26.66665)">
      <G id="b">
        <Path id="a" d="m-.3 0 .5.1L0-1z" />
        <Use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#a" />
      </G>
      <Use width="100%" height="100%" transform="rotate(72)" xlinkHref="#b" />
      <Use width="100%" height="100%" transform="rotate(-72)" xlinkHref="#b" />
      <Use width="100%" height="100%" transform="rotate(144)" xlinkHref="#b" />
      <Use width="100%" height="100%" transform="rotate(-144)" xlinkHref="#b" />
    </G>
    <Use width="100%" height="100%" transform="translate(133.3 -42.7)" xlinkHref="#c" />
    <Use width="100%" height="100%" transform="translate(133.3 37.3)" xlinkHref="#c" />
    <Use width="100%" height="100%" transform="translate(-133.3 -42.7)" xlinkHref="#c" />
    <Use width="100%" height="100%" transform="translate(-133.3 37.3)" xlinkHref="#c" />
  </Svg>
)

export default FlagHn
