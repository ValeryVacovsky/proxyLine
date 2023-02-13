import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

const FlagFm = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M-81.3 0h682.6v512H-81.3z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" strokeWidth="1pt" clipPath="url(#a)" transform="translate(76.3) scale(.94)">
      <Path fill="#6797d6" d="M-252 0H772v512H-252z" />
      <Path
        fill="#fff"
        d="m259.8 123-32.4 22.2 12.4-35.9-32.5-22.2h40.1l12.4-35.9 12.4 36h40l-32.4 22.1 12.4 35.9M259.8 390l-32.4-22.2 12.4 36-32.5 22.1h40.1l12.4 35.9 12.4-36 40 .1-32.4-22.2 12.4-35.9m-188.4-92.4L79.3 306l1.4-38-37.5-11.7 38.4-11.7 1.3-38 22.3 30.8 38.4-11.8-24.6 30.7 22.4 30.7m274.2-11.7 24.6 30.7-1.4-38 37.5-11.7-38.4-11.7-1.3-38-22.3 30.8-38.4-11.8 24.6 30.7-22.4 30.7"
      />
    </G>
  </Svg>
)

export default FlagFm
