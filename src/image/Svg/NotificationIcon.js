import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const NotificationIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={19} height={18} fill="none" {...props}>
    <Path
      d="M10.982 15.182a1.5 1.5 0 0 1-2.595 0"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.416 11.927s-1.73-1.296-1.73-5.549a4.878 4.878 0 1 0-9.756 0c0 4.253-1.715 5.534-1.723 5.541a.762.762 0 0 0 .42 1.395h12.355a.762.762 0 0 0 .716-.533.763.763 0 0 0-.282-.854Z"
      fill="#fff"
    />
  </Svg>
)

export default NotificationIcon
