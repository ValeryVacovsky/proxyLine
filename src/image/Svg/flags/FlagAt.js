import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const FlagAt = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <G fillRule="evenodd">
      <Path fill="#fff" d="M640 480H0V0h640z" />
      <Path fill="#ed2939" d="M640 480H0V320h640zm0-319.9H0V.1h640z" />
    </G>
  </Svg>
)

export default FlagAt
