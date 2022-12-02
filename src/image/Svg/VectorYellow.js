import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function VectorYellow(props) {
  return (
    <Svg
      width={16}
      height={11}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path
        d="M14.667.833 5.5 10 1.333 5.833"
        stroke="#FAC637"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default VectorYellow
