import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const FlagCd = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <Path fill="#007fff" d="M0 0h640v480H0z" />
    <Path
      fill="#f7d618"
      d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2L28.8 96zM600 0 0 360v120h40l600-360V0h-40"
    />
    <Path fill="#ce1021" d="M640 0 0 384v96L640 96V0" />
  </Svg>
)

export default FlagCd
