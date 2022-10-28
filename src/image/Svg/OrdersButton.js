import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const OrdersButton = props => (
  <Svg width={17} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M5 7.333H2.5c-.92 0-1.667-.745-1.667-1.666v-2.5C.833 2.246 1.58 1.5 2.5 1.5H5c.92 0 1.667.746 1.667 1.667v2.5c0 .92-.746 1.666-1.667 1.666ZM14.167 7.333h-2.5c-.921 0-1.667-.745-1.667-1.666v-2.5c0-.921.746-1.667 1.667-1.667h2.5c.92 0 1.666.746 1.666 1.667v2.5c0 .92-.745 1.666-1.666 1.666ZM5 16.5H2.5c-.92 0-1.667-.746-1.667-1.667v-2.5c0-.92.746-1.666 1.667-1.666H5c.92 0 1.667.745 1.667 1.666v2.5c0 .921-.746 1.667-1.667 1.667ZM15 11.958h-4.167M10.833 15.208H15"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default OrdersButton
