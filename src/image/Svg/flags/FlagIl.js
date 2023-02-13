import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

const SvgComponent = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <Defs>
      <ClipPath id="a">
        <Path fillOpacity={0.7} d="M-87.6 0H595v512H-87.6z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" clipPath="url(#a)" transform="translate(82.1) scale(.94)">
      <Path fill="#fff" d="M619.4 512H-112V0h731.4z" />
      <Path
        fill="#00c"
        d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275 110.1 191.6L359 191.6l-222.6-.8z"
      />
      <Path fill="#fff" d="m225.8 317.8 20.9 35.5 21.4-35.3-42.4-.2z" />
      <Path fill="#00c" d="M136 320.6 246.2 129l112.4 190.8-222.6.8z" />
      <Path
        fill="#fff"
        d="m225.8 191.6 20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5 41.2.3-19.8 36.3-21.4-36.6zm151.2 67 20.9 35.5-41.7-.5 20.8-35zm20.5-67-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
      />
    </G>
  </Svg>
)

export default SvgComponent
