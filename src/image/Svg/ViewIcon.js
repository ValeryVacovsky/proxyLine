import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ViewIcon(props) {
  return (
    <Svg
      width={14}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path
        d="M1.079 6.311a.658.658 0 0 1 0-.623c1.26-2.332 3.59-4.354 5.92-4.354s4.66 2.022 5.922 4.355a.658.658 0 0 1 0 .623C11.66 8.645 9.33 10.667 7 10.667S2.34 8.645 1.079 6.31v0Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.414 4.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828Z"
        stroke="#fff"
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ViewIcon
