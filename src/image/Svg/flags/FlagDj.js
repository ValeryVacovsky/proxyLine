import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

const FlagDj = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M-40 0h682.7v512H-40z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" clipPath="url(#a)" transform="translate(37.5) scale(.94)">
      <Path fill="#0c0" d="M-40 0h768v512H-40z" />
      <Path fill="#69f" d="M-40 0h768v256H-40z" />
      <Path fill="#fffefe" d="m-40 0 382.7 255.7L-40 511V0z" />
      <Path
        fill="red"
        d="M119.8 292 89 270l-30.7 22.4L69.7 256l-30.6-22.5 37.9-.3 11.7-36.3 12 36.2h37.9l-30.5 22.7 11.7 36.4z"
      />
    </G>
  </Svg>
)

export default FlagDj
