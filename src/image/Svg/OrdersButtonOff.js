import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const OrdersButtonOff = props => (
  <Svg width={21} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M7 8.333H4.5c-.92 0-1.667-.745-1.667-1.666v-2.5c0-.921.746-1.667 1.667-1.667H7c.92 0 1.667.746 1.667 1.667v2.5c0 .92-.746 1.666-1.667 1.666ZM16.167 8.333h-2.5c-.921 0-1.667-.745-1.667-1.666v-2.5c0-.921.746-1.667 1.667-1.667h2.5c.92 0 1.666.746 1.666 1.667v2.5c0 .92-.745 1.666-1.666 1.666ZM7 17.5H4.5c-.92 0-1.667-.746-1.667-1.667v-2.5c0-.92.746-1.666 1.667-1.666H7c.92 0 1.667.745 1.667 1.666v2.5c0 .921-.746 1.667-1.667 1.667ZM17 12.958h-4.167M12.833 16.208H17"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default OrdersButtonOff
