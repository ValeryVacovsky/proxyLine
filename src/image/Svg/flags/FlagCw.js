import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G, Use } from 'react-native-svg'

const FlagCw = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480">
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
      </ClipPath>
      <Path id="b" d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z" />
    </Defs>
    <G clipPath="url(#a)" transform="scale(.94)">
      <Path fill="#002b7f" d="M0 0h768v512H0z" />
      <Path fill="#f9e814" d="M0 320h768v64H0z" />
      <Use width={13500} height={9000} x={2} y={2} fill="#fff" transform="scale(42.67)" xlinkHref="#b" />
      <Use width={13500} height={9000} x={3} y={3} fill="#fff" transform="scale(56.9)" xlinkHref="#b" />
    </G>
  </Svg>
)

export default FlagCw
