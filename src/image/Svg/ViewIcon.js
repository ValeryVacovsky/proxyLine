import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ViewIcon(props) {
  return (
    <Svg width={18} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M1.598 7.39a.822.822 0 0 1 0-.78C3.175 3.694 6.088 1.167 9 1.167S14.825 3.694 16.4 6.61c.131.242.131.536 0 .779-1.576 2.916-4.489 5.443-7.401 5.443-2.913 0-5.825-2.527-7.402-5.444v0Z"
        stroke="#CBCBCB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.768 5.232a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.535-3.536Z"
        stroke="#CBCBCB"
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ViewIcon
