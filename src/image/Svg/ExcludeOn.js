import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ExcludeOn = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <Path
      d="M16 8.667v6.666c0 .921-.746 1.667-1.667 1.667H2.667C1.746 17 1 16.254 1 15.333V3.667C1 2.746 1.746 2 2.667 2H8.5"
      stroke="#CBCBCB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m18 2-8.938 8.938L5 6.875"
      stroke="#CBCBCB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ExcludeOn
