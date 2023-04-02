import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

const FlagTw = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" strokeWidth="1pt" clipPath="url(#a)" transform="scale(.9375)">
      <Path fill="#fe0000" d="M0 0h768v512H0z" />
      <Path fill="#000095" d="M0 0h385.7v256H0z" />
      <Path
        fill="#fff"
        d="m282.1 178.6-47.3-9.8 10 47.3-36-32.1-15 46-15.2-45.9-36 32.4 9.8-47.4-47.2 10.1 32-36.1-46-15 46-15.2-32.4-35.8 47.3 9.7-10-47.3 36 32.1 15-46 15.2 45.9 35.9-32.4-9.7 47.4 47.2-10.1-32 36.1 45.9 15-45.9 15.2z"
      />
      <Path
        fill="#000095"
        d="m238.5 175-15 7.9-14.5 8.6-17-.6-16.9.2-14.3-9L146 174l-8-15-8.6-14.5.6-16.8-.2-17 9-14.2 8.3-14.8 14.9-7.9 14.6-8.6 16.9.6 17-.2 14.3 9 14.7 8.2 8 14.9 8.6 14.5-.6 16.9.2 16.9-9 14.3z"
      />
      <Path fill="#fff" d="M244.6 128.3a51.9 51.9 0 1 1-103.7 0 51.9 51.9 0 0 1 103.7 0z" />
    </G>
  </Svg>
)

export default FlagTw
