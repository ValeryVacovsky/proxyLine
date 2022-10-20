import * as React from "react"
import Svg, { G, Rect, Defs, RadialGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const FrameYellow = (props) => (
  <Svg
    width={10}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect y={0.5} width={10} height={10} rx={5} fill="url(#a)" />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 5 -5 0 5 5.5)"
      >
        <Stop stopColor="#FFB800" />
        <Stop offset={1} stopColor="#FFB800" />
      </RadialGradient>
    </Defs>
  </Svg>
)

export default FrameYellow
