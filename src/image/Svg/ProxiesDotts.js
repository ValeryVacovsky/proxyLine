import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ProxiesDotts(props) {
  return (
    <Svg
      width={3}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path
        d="M1.491 12.5c-.825 0-1.5.675-1.49 1.5 0 .825.674 1.5 1.499 1.5.825 0 1.5-.675 1.5-1.5s-.675-1.5-1.509-1.5ZM1.491 6.5c-.825 0-1.5.675-1.49 1.5C0 8.825.674 9.5 1.5 9.5 2.325 9.5 3 8.825 3 8s-.675-1.5-1.509-1.5ZM1.491.5C.666.5-.009 1.175.001 2 0 2.825.674 3.5 1.5 3.5 2.325 3.5 3 2.825 3 2S2.325.5 1.491.5Z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ProxiesDotts
