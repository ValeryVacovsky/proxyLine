import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const InfoCopyIcon = props => (
  <Svg width={12} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M8 11.933V6.242c0-.284-.113-.555-.313-.755L6.18 3.98c-.2-.2-.471-.313-.754-.313H1.733c-.589 0-1.066.478-1.066 1.067v7.2c0 .59.477 1.067 1.066 1.067h5.2C7.523 13 8 12.523 8 11.933v0Z"
      stroke="#CBCBCB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 10.333h2.267c.589 0 1.066-.477 1.066-1.066V3.575c0-.283-.112-.554-.312-.754L9.513 1.313c-.2-.2-.472-.313-.755-.313H5.067C4.477 1 4 1.477 4 2.067v1.6"
      stroke="#CBCBCB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.333 3.667H9.2a.533.533 0 0 1-.533-.534V1M8 6.333H5.867a.533.533 0 0 1-.534-.533V3.667"
      stroke="#CBCBCB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default InfoCopyIcon
