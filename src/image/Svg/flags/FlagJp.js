import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G, Circle } from 'react-native-svg'

const FlagJp = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M-88 32h640v480H-88z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" strokeWidth="1pt" clipPath="url(#a)" transform="translate(88 -32)">
      <Path fill="#fff" d="M-128 32h720v480h-720z" />
      <Circle cx={523.1} cy={344.1} r={194.9} fill="#d30000" transform="translate(-168.4 8.6) scale(.76554)" />
    </G>
  </Svg>
)

export default FlagJp
