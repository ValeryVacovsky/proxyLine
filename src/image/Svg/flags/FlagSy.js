import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

const FlagSy = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Rect width={640} height={160} y={160} fill="#fff" fillRule="evenodd" rx={0} ry={0} />
    <Rect width={640} height={160} y={320} fillRule="evenodd" rx={0} ry={0} />
    <Path fill="red" fillRule="evenodd" d="M0 0h640v160H0z" />
    <Path
      fill="#090"
      fillRule="evenodd"
      d="m201.9 281-28.8-20.9-28.7 21.1 10.7-34.2-28.7-21.2 35.4-.3 11-34.1 11.3 34h35.4L191 246.9l10.9 34.2zm307.6 0-28.8-20.9-28.7 21.1 10.7-34.2-28.6-21.2 35.4-.3 11-34.1 11.2 34h35.4l-28.5 21.4 11 34.2z"
    />
  </Svg>
)

export default FlagSy
