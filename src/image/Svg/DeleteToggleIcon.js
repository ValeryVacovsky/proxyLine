import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const DeleteToggleIcon = props => (
  <Svg width={10} height={10} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="m1 1 8 8M9 1 1 9" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
)

export default DeleteToggleIcon
