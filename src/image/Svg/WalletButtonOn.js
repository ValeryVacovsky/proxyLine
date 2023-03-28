import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const WalletButtonOn = props => (
  <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M15.667 2.5H4.833" stroke="#FAC637" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <Path
      d="M18.167 13.958v1.459a2.083 2.083 0 0 1-2.084 2.083H5.25a2.083 2.083 0 0 1-2.083-2.083V7.083A2.083 2.083 0 0 1 5.25 5h10.833a2.083 2.083 0 0 1 2.084 2.083v1.459h-1.25a2.708 2.708 0 1 0 0 5.416h1.25Z"
      fill="#FAC637"
    />
    <Path
      d="M15.886 10.219a1.458 1.458 0 0 1 1.03-.427h1.25a.208.208 0 0 1 .209.208v2.5a.209.209 0 0 1-.208.208h-1.25a1.458 1.458 0 0 1-1.032-2.49Z"
      fill="#FAC637"
    />
  </Svg>
)

export default WalletButtonOn
