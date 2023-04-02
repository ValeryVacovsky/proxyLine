import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

const FlagMv = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Path fill="#d21034" d="M0 0h640v480H0z" />
    <Path fill="#007e3a" d="M120 120h400v240H120z" />
    <Circle cx={350} cy={240} r={80} fill="#fff" />
    <Circle cx={380} cy={240} r={80} fill="#007e3a" />
  </Svg>
)

export default FlagMv
