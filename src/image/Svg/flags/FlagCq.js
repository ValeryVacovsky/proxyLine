import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

const FlagCq = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M-79.5 32h640v480h-640z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" strokeWidth="1pt" clipPath="url(#a)" transform="translate(79.5 -32)">
      <Path fill="#ff0" d="M-119.5 32h720v480h-720z" />
      <Path fill="#00ca00" d="M-119.5 32v480l480-480h-480z" />
      <Path fill="red" d="M120.5 512h480V32l-480 480z" />
    </G>
  </Svg>
)

export default FlagCq
