import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

const FlagTn = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M-85.3 0h682.6v512H-85.3z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" clipPath="url(#a)" transform="translate(80) scale(.9375)">
      <Path fill="#e70013" d="M-128 0h768v512h-768z" />
      <Path fill="#fff" d="M385.8 255.8a129.1 129.1 0 1 1-258.2 0 129.1 129.1 0 0 1 258.2 0z" />
      <Path
        fill="#e70013"
        d="M256.7 341.4a85.7 85.7 0 0 1 0-171.3c11.8 0 25.3 2.8 34.4 9.5-62.6 2.3-78.5 55.5-78.5 76.9s10.1 69.1 78.5 76.2c-7.8 5-22.6 8.7-34.4 8.7z"
      />
      <Path
        fill="#e70013"
        d="m332.1 291.8-38.9-14.2-25.7 32.4 1.5-41.3-38.8-14.5 39.8-11.4 1.7-41.3 23.2 34.3 39.8-11-25.5 32.5z"
      />
    </G>
  </Svg>
)

export default FlagTn
