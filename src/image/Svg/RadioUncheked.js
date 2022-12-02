import * as React from 'react'
import Svg, { G, Rect, Defs, LinearGradient, Stop } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function RadioUncheked(props) {
  return (
    <Svg
      width={21}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <G filter="url(#a)">
        <Rect x={0.5} width={20} height={20} rx={10} fill="url(#b)" />
      </G>
      <Defs>
        <LinearGradient id="b" x1={10.5} y1={0} x2={10.5} y2={20} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#1E2127" />
          <Stop offset={1} stopColor="#1A1C1F" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default RadioUncheked
