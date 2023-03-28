import * as React from 'react'
import Svg, { Path, G, Use } from 'react-native-svg'

const FlagGw = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480">
    <Path fill="#ce1126" d="M0 0h220v480H0z" />
    <Path fill="#fcd116" d="M220 0h420v240H220z" />
    <Path fill="#009e49" d="M220 240h420v240H220z" />
    <G id="b" transform="matrix(80 0 0 80 110 240)">
      <Path id="a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
      <Use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#a" />
    </G>
    <Use width="100%" height="100%" transform="rotate(72 110 240)" xlinkHref="#b" />
    <Use width="100%" height="100%" transform="rotate(144 110 240)" xlinkHref="#b" />
    <Use width="100%" height="100%" transform="rotate(-144 110 240)" xlinkHref="#b" />
    <Use width="100%" height="100%" transform="rotate(-72 110 240)" xlinkHref="#b" />
  </Svg>
)

export default FlagGw
