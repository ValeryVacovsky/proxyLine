import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function VectorClose(props) {
  return (
    <Svg
      width={14}
      height={8}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path d="M13 1 7 7 1 1" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export default VectorClose
