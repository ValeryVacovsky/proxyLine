import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

const SafetyIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <Path
      d="M5.881 3.271H4.386c-.826 0-1.495.67-1.495 1.495v1.496M13.358 3.271h1.495c.826 0 1.496.67 1.496 1.495v1.496M5.881 16.73H4.386c-.826 0-1.495-.67-1.495-1.496V13.74M13.358 16.73h1.495c.826 0 1.496-.67 1.496-1.496V13.74"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect x={5.134} y={5.514} width={8.972} height={8.972} rx={2} fill="#fff" />
  </Svg>
)

export default SafetyIcon
