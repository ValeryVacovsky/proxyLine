import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SettingsVector(props) {
  return (
    <Svg
      width={8}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path
        d="M.47 12.47a.75.75 0 1 0 1.06 1.06L.47 12.47ZM7 7l.53.53a.75.75 0 0 0 0-1.06L7 7ZM1.53.47A.75.75 0 0 0 .47 1.53L1.53.47Zm0 13.06 6-6-1.06-1.06-6 6 1.06 1.06Zm6-7.06-6-6L.47 1.53l6 6 1.06-1.06Z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SettingsVector
