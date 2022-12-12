import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ViewIconOff = props => (
  <Svg width={20} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M10 15c-.842 0-1.685-.178-2.504-.495M18.882 8.468C16.99 11.967 13.495 15 10 15M17.079 4.921a15.135 15.135 0 0 1 1.803 2.612.987.987 0 0 1 0 .935M3 15 17 1M7.773 10.227a3.15 3.15 0 0 1 4.455-4.455"
      stroke="#0F1218"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.044 2.956C13.497 1.759 11.748 1 10 1 6.505 1 3.01 4.033 1.118 7.533a.987.987 0 0 0 0 .935c.946 1.749 2.292 3.381 3.838 4.577"
      stroke="#0F1218"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ViewIconOff
