import * as React from 'react'
import Svg, { G, Rect, Defs, LinearGradient, Stop } from 'react-native-svg'

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={20} height={20} rx={10} fill="url(#b)" />
      <G filter="url(#c)">
        <Rect x={4} y={4} width={12} height={12} rx={6} fill="#EC3641" />
      </G>
    </G>
    <Defs>
      <LinearGradient id="b" x1={10} y1={0} x2={10} y2={20} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#0F1218" />
        <Stop offset={1} stopColor="#34373D" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
