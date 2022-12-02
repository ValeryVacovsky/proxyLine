import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SettingsVector2(props) {
  return (
    <Svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path
        d="M7.667 8.553C4.604 8.553 2 10.128 1 12.333v-.671c0-4.01 2.947-7.282 6.667-7.527V1L13 6.333l-5.333 5.334V8.555"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SettingsVector2
