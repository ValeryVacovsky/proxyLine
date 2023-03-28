import * as React from 'react'
import Svg, { Path, G, Use } from 'react-native-svg'

const FlagCm = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480">
    <Path fill="#007a5e" d="M0 0h213.3v480H0z" />
    <Path fill="#ce1126" d="M213.3 0h213.4v480H213.3z" />
    <Path fill="#fcd116" d="M426.7 0H640v480H426.7z" />
    <G fill="#fcd116" transform="translate(320 240) scale(7.1111)">
      <G id="b">
        <Path id="a" d="M0-8-2.5-.4 1.3.9z" />
        <Use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#a" />
      </G>
      <Use width="100%" height="100%" transform="rotate(72)" xlinkHref="#b" />
      <Use width="100%" height="100%" transform="rotate(144)" xlinkHref="#b" />
      <Use width="100%" height="100%" transform="rotate(-144)" xlinkHref="#b" />
      <Use width="100%" height="100%" transform="rotate(-72)" xlinkHref="#b" />
    </G>
  </Svg>
)

export default FlagCm
