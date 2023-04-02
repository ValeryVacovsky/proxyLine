import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

const FlagKw = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" strokeWidth="1pt" clipPath="url(#a)" transform="scale(.9375)">
      <Path fill="#fff" d="M0 170.6h1024v170.7H0z" />
      <Path fill="#f31830" d="M0 341.3h1024V512H0z" />
      <Path fill="#00d941" d="M0 0h1024v170.7H0z" />
      <Path d="M0 0v512l255.4-170.7.6-170.8L0 0z" />
    </G>
  </Svg>
)

export default FlagKw
