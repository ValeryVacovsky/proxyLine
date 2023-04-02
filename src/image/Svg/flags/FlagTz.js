import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

const FlagTz = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M10 0h160v120H10z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" strokeWidth="1pt" clipPath="url(#a)" transform="matrix(4 0 0 4 -40 0)">
      <Path fill="#09f" d="M0 0h180v120H0z" />
      <Path fill="#090" d="M0 0h180L0 120V0z" />
      <Path d="M0 120h40l140-95V0h-40L0 95v25z" />
      <Path fill="#ff0" d="M0 91.5 137.2 0h13.5L0 100.5v-9zM29.3 120 180 19.5v9L42.8 120H29.3z" />
    </G>
  </Svg>
)

export default FlagTz
