import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function CloudProxyIcon(props) {
  return (
    <Svg width={30} height={26} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M19.667 18.333C19.667 19.807 17.577 21 15 21s-4.667-1.195-4.667-2.667M10.333 14.333C10.333 15.807 12.423 17 15 17s4.667-1.193 4.667-2.667"
        stroke="#4F4F4F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.333 14.333v8C10.333 23.805 12.421 25 15 25c2.577 0 4.666-1.193 4.666-2.667v-8c.002-1.473-2.089-2.666-4.665-2.666s-4.665 1.194-4.667 2.666Z"
        stroke="#4F4F4F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.333 19.479c2.296-.595 4-2.663 4-5.146A5.334 5.334 0 0 0 23 9a8 8 0 0 0-8-8c-3.516 0-6.495 2.27-7.568 5.424C4.18 6.868 1.667 9.627 1.667 13c0 2.73 1.65 5.061 4 6.092"
        stroke="#4F4F4F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CloudProxyIcon
