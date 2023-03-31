import * as React from 'react'
import Svg, { Path, Circle, G, Use } from 'react-native-svg'

const FlagUz = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480" {...props}>
    <Path fill="#1eb53a" d="M0 320h640v160H0z" />
    <Path fill="#0099b5" d="M0 0h640v160H0z" />
    <Path fill="#ce1126" d="M0 153.6h640v172.8H0z" />
    <Path fill="#fff" d="M0 163.2h640v153.6H0z" />
    <Circle cx={134.4} cy={76.8} r={57.6} fill="#fff" />
    <Circle cx={153.6} cy={76.8} r={57.6} fill="#0099b5" />
    <G fill="#fff" transform="matrix(1.92 0 0 1.92 261.1 122.9)">
      <G id="e">
        <G id="d">
          <G id="c">
            <G id="b">
              <Path id="a" d="M0-6-1.9-.3 1 .7" />
              <Use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#a" />
            </G>
            <Use width="100%" height="100%" transform="rotate(72)" xlinkHref="#b" />
          </G>
          <Use width="100%" height="100%" transform="rotate(-72)" xlinkHref="#b" />
          <Use width="100%" height="100%" transform="rotate(144)" xlinkHref="#c" />
        </G>
        <Use width="100%" height="100%" y={-24} xlinkHref="#d" />
        <Use width="100%" height="100%" y={-48} xlinkHref="#d" />
      </G>
      <Use width="100%" height="100%" x={24} xlinkHref="#e" />
      <Use width="100%" height="100%" x={48} xlinkHref="#e" />
      <Use width="100%" height="100%" x={-48} xlinkHref="#d" />
      <Use width="100%" height="100%" x={-24} xlinkHref="#d" />
      <Use width="100%" height="100%" x={-24} y={-24} xlinkHref="#d" />
    </G>
  </Svg>
)

export default FlagUz
