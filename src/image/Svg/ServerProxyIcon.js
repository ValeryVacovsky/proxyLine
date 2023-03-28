import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ServerProxyIcon(props) {
  return (
    <Svg
      width={26}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path
        d="M21 14.667H5a4 4 0 1 0 0 8h16a4 4 0 1 0 0-8ZM21 18.667h-9.333M6.333 18.667H5"
        stroke="#4F4F4F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m24.987 18.343-1.13-14.55a2.667 2.667 0 0 0-2.658-2.46H4.8a2.667 2.667 0 0 0-2.658 2.46l-1.13 14.55"
        stroke="#4F4F4F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ServerProxyIcon
