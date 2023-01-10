import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ProxyInfoChange = props => (
  <Svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M16.5 8.167v6.666c0 .921-.746 1.667-1.667 1.667H3.167c-.921 0-1.667-.746-1.667-1.667V3.167c0-.921.746-1.667 1.667-1.667H9"
      stroke="#CBCBCB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m6.5 11.5 2.625-.324a.836.836 0 0 0 .488-.238l6.359-6.359a1.804 1.804 0 0 0-2.551-2.55l-6.3 6.3a.834.834 0 0 0-.236.47L6.5 11.5v0Z"
      stroke="#CBCBCB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ProxyInfoChange
