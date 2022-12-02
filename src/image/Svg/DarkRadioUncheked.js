import * as React from 'react'
import Svg, { G, Rect, Defs, LinearGradient, Stop } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DarkRadioUncheked(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <G filter="url(#a)">
        <Rect width={20} height={20} rx={10} fill="url(#b)" />
      </G>
      <Defs>
        <LinearGradient id="b" x1={10} y1={0} x2={10} y2={20} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#1B1E22" />
          <Stop offset={1} stopColor="#0D0D0F" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default DarkRadioUncheked
