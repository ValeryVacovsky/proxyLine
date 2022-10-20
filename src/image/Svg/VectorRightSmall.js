import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VectorRightSmall = (props) => (
  <Svg
    width={6}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.22 9.97a.75.75 0 1 0 1.06 1.06L.22 9.97ZM5.25 6l.53.53a.75.75 0 0 0 0-1.06L5.25 6ZM1.28.97A.75.75 0 0 0 .22 2.03L1.28.97Zm0 10.06 4.5-4.5-1.06-1.06-4.5 4.5 1.06 1.06Zm4.5-5.56L1.28.97.22 2.03l4.5 4.5 1.06-1.06Z"
      fill="#636363"
    />
  </Svg>
)

export default VectorRightSmall
