import * as React from 'react'
import Svg, { Path, G, Circle, Use } from 'react-native-svg'

const FlagIn = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480">
    <Path fill="#f93" d="M0 0h640v160H0z" />
    <Path fill="#fff" d="M0 160h640v160H0z" />
    <Path fill="#128807" d="M0 320h640v160H0z" />
    <G transform="matrix(3.2 0 0 3.2 320 240)">
      <Circle r={20} fill="#008" />
      <Circle r={17.5} fill="#fff" />
      <Circle r={3.5} fill="#008" />
      <G id="d">
        <G id="c">
          <G id="b">
            <G id="a" fill="#008">
              <Circle r={0.9} transform="rotate(7.5 -8.8 133.5)" />
              <Path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z" />
            </G>
            <Use width="100%" height="100%" transform="rotate(15)" xlinkHref="#a" />
          </G>
          <Use width="100%" height="100%" transform="rotate(30)" xlinkHref="#b" />
        </G>
        <Use width="100%" height="100%" transform="rotate(60)" xlinkHref="#c" />
      </G>
      <Use width="100%" height="100%" transform="rotate(120)" xlinkHref="#d" />
      <Use width="100%" height="100%" transform="rotate(-120)" xlinkHref="#d" />
    </G>
  </Svg>
)

export default FlagIn
