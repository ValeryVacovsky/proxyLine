import * as React from 'react'
import Svg, { Defs, Path, G, Use } from 'react-native-svg'

const FlagMm = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480" {...props}>
    <Defs>
      <Path id="a" fill="#fff" d="m0-.5.2.5h-.4z" transform="scale(8.844)" />
      <G id="b">
        <Use width={18} height={12} transform="rotate(-144)" xlinkHref="#a" />
        <Use width={18} height={12} transform="rotate(-72)" xlinkHref="#a" />
        <Use width={18} height={12} xlinkHref="#a" />
        <Use width={18} height={12} transform="rotate(72)" xlinkHref="#a" />
        <Use width={18} height={12} transform="rotate(144)" xlinkHref="#a" />
      </G>
    </Defs>
    <Path fill="#fecb00" d="M0-.1h640V160H0z" />
    <Path fill="#ea2839" d="M0 320h640v160H0z" />
    <Path fill="#34b233" d="M0 160h640v160H0z" />
    <Use width={18} height={12} x={9} y={6.4} transform="matrix(40 0 0 40 -40 0)" xlinkHref="#b" />
  </Svg>
)

export default FlagMm
