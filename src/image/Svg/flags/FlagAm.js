import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const FlagAm = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <Path fill="red" d="M0 0h640v160H0z" />
    <Path fill="#00f" d="M0 160h640v160H0z" />
    <Path fill="orange" d="M0 320h640v160H0z" />
  </Svg>
)

export default FlagAm