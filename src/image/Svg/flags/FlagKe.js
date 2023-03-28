import * as React from 'react'
import Svg, { Defs, Path, G, Use, Ellipse } from 'react-native-svg'

const FlagKe = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480">
    <Defs>
      <Path
        id="a"
        strokeMiterlimit={10}
        d="m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
      />
    </Defs>
    <Path fill="#fff" d="M0 0h640v480H0z" />
    <Path d="M0 0h640v144H0z" />
    <Path fill="#060" d="M0 336h640v144H0z" />
    <G id="b" transform="matrix(3 0 0 3 320 240)">
      <Use width="100%" height="100%" stroke="#000" xlinkHref="#a" />
      <Use width="100%" height="100%" fill="#fff" xlinkHref="#a" />
    </G>
    <Use width="100%" height="100%" transform="matrix(-1 0 0 1 640 0)" xlinkHref="#b" />
    <Path
      fill="#b00"
      d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z"
    />
    <Path id="c" d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72" />
    <Use width="100%" height="100%" transform="matrix(-1 0 0 1 640 0)" xlinkHref="#c" />
    <G fill="#fff" transform="matrix(3 0 0 3 320 240)">
      <Ellipse rx={4} ry={6} />
      <Path id="d" d="M1 5.8s4 8 4 21-4 21-4 21z" />
      <Use width="100%" height="100%" transform="scale(-1)" xlinkHref="#d" />
      <Use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#d" />
      <Use width="100%" height="100%" transform="scale(1 -1)" xlinkHref="#d" />
    </G>
  </Svg>
)

export default FlagKe
