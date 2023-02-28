import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const FlagCh = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <G fillRule="evenodd" strokeWidth="1pt">
      <Path fill="#d52b1e" d="M0 0h640v480H0z" />
      <G fill="#fff">
        <Path d="M170 195h300v90H170z" />
        <Path d="M275 90h90v300h-90z" />
      </G>
    </G>
  </Svg>
)

export default FlagCh