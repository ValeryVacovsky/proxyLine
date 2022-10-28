import * as React from "react"
import Svg, { Path } from "react-native-svg"

const WalletButton = (props) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.667 1.5H1.833"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.167 12.958v1.459a2.083 2.083 0 0 1-2.084 2.083H2.25a2.083 2.083 0 0 1-2.083-2.083V6.083A2.083 2.083 0 0 1 2.25 4h10.833a2.083 2.083 0 0 1 2.084 2.083v1.459h-1.25a2.708 2.708 0 1 0 0 5.416h1.25Z"
      fill={props.color}
    />
    <Path
      d="M12.886 9.219a1.458 1.458 0 0 1 1.03-.427h1.25a.208.208 0 0 1 .209.208v2.5a.209.209 0 0 1-.208.208h-1.25a1.458 1.458 0 0 1-1.031-2.49Z"
      fill={props.color}
    />
  </Svg>
)

export default WalletButton
