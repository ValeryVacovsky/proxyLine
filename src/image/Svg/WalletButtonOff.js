import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function WalletButtonOff(props) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path
        d="M14.917 8.167h1.25A.833.833 0 0 1 17 9v2.5a.833.833 0 0 1-.833.833h-1.25a2.083 2.083 0 0 1 0-4.166ZM13.667 1.5H2.833"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.167 12.333v2.084a2.083 2.083 0 0 1-2.084 2.083H3.25a2.083 2.083 0 0 1-2.083-2.083V6.083A2.083 2.083 0 0 1 3.25 4h10.833a2.083 2.083 0 0 1 2.084 2.083v2.084"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default WalletButtonOff
