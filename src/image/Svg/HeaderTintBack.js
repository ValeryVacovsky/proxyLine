import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const HeaderTintBack = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} fill="none" {...props}>
    <Path d="m6.5 11-5-5 5-5" stroke="#CBCBCB" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
)

export default HeaderTintBack
