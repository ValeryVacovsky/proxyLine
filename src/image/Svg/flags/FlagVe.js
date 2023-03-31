import * as React from 'react'
import Svg, { Defs, G, Path, Use } from 'react-native-svg'

const FlagVe = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480" {...props}>
    <Defs>
      <G id="d" transform="translate(0 -36)">
        <G id="c">
          <G id="b">
            <Path id="a" fill="#fff" d="M0-5-1.5-.2l2.8.9z" />
            <Use width={180} height={120} transform="scale(-1 1)" xlinkHref="#a" />
          </G>
          <Use width={180} height={120} transform="rotate(72)" xlinkHref="#b" />
        </G>
        <Use width={180} height={120} transform="rotate(-72)" xlinkHref="#b" />
        <Use width={180} height={120} transform="rotate(144)" xlinkHref="#c" />
      </G>
    </Defs>
    <Path fill="#cf142b" d="M0 0h640v480H0z" />
    <Path fill="#00247d" d="M0 0h640v320H0z" />
    <Path fill="#fc0" d="M0 0h640v160H0z" />
    <G id="f" transform="matrix(4 0 0 4 320 336)">
      <G id="e">
        <Use width={180} height={120} transform="rotate(10)" xlinkHref="#d" />
        <Use width={180} height={120} transform="rotate(30)" xlinkHref="#d" />
      </G>
      <Use width={180} height={120} transform="rotate(40)" xlinkHref="#e" />
    </G>
    <Use width={180} height={120} transform="rotate(-80 320 336)" xlinkHref="#f" />
  </Svg>
)

export default FlagVe
