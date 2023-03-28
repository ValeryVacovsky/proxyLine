import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const TypeIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={17} fill="none" {...props}>
    <Path
      d="M7 16.333c-1.93-.461-3.524-1.514-4.78-3.157C.961 11.534.332 9.71.332 7.704V2.875L7 .5l6.667 2.375v4.83c0 2.005-.629 3.829-1.885 5.471C10.524 14.82 8.93 15.871 7 16.333Z"
      fill="#fff"
    />
  </Svg>
)

export default TypeIcon
