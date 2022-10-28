import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const PeopleIconProxy = props => (
  <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M27.723 12.698a2.697 2.697 0 1 1-3.814 3.815 2.697 2.697 0 0 1 3.814-3.815ZM18.937 7.883a4.153 4.153 0 1 1-5.874 5.874 4.153 4.153 0 0 1 5.874-5.874M8.091 12.698a2.697 2.697 0 1 1-3.814 3.815 2.697 2.697 0 0 1 3.814-3.815ZM30.667 25.333v-1.461a3.333 3.333 0 0 0-3.334-3.333h-1.068M1.333 25.333v-1.461a3.333 3.333 0 0 1 3.334-3.333h1.068M23.119 25.333V23.2a4.667 4.667 0 0 0-4.667-4.667h-4.905a4.667 4.667 0 0 0-4.667 4.667v2.134"
      stroke="#4F4F4F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default PeopleIconProxy
