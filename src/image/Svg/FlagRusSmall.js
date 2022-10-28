import * as React from 'react'
import Svg, { Mask, Path, G } from 'react-native-svg'

const FlagRusSmall = props => (
  <Svg width={16} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={13}>
      <Path fill="#fff" d="M0 .5h16v12H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path fillRule="evenodd" clipRule="evenodd" d="M0 .5v12h16V.5H0Z" fill="#3D58DB" />
      <Mask
        id="b"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={13}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 .5v12h16V.5H0Z" fill="#fff" />
      </Mask>
      <G mask="url(#b)" fillRule="evenodd" clipRule="evenodd">
        <Path d="M0 .5v4h16v-4H0Z" fill="#F7FCFF" />
        <Path d="M0 8.5v4h16v-4H0Z" fill="#C51918" />
      </G>
    </G>
  </Svg>
)

export default FlagRusSmall
