import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const FlagGy = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <G fillRule="evenodd">
      <Path fill="#399408" d="M2.4 0H640v480H2.4z" />
      <Path fill="#fff" d="M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8.2 0z" />
      <Path fill="#ffde08" d="M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z" />
      <Path d="M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477V.8z" />
      <Path fill="#de2110" d="M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z" />
    </G>
  </Svg>
)

export default FlagGy