import * as React from 'react'
import Svg, { G, Rect, Path } from 'react-native-svg'

const FlagEe = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <G fillRule="evenodd" strokeWidth="1pt">
      <Rect width={640} height={477.9} rx={0} ry={0} />
      <Rect width={640} height={159.3} y={320.7} fill="#fff" rx={0} ry={0} />
      <Path fill="#1291ff" d="M0 0h640v159.3H0z" />
    </G>
  </Svg>
)

export default FlagEe
