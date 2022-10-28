import * as React from 'react'
import Svg, { G, Mask, Path, Defs, LinearGradient, Stop, ClipPath, Rect } from 'react-native-svg'

const FlagUsaSmall = props => (
  <Svg width={props.width} height={props.height} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#a)">
      <Mask
        id="b"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={props.width}
        height={props.height}>
        <Path fill="#fff" d="M0 .5h16v12H0z" />
      </Mask>
      <G mask="url(#b)">
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 .5h16v12H0V.5Z" fill="#E31D1C" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5v1h16v-1H0Zm0 2v1h16v-1H0Zm0 3v-1h16v1H0Zm0 1v1h16v-1H0Zm0 3v-1h16v1H0Zm0 2v-1h16v1H0Z"
          fill="#F7FCFF"
        />
        <Path fill="#2E42A5" d="M0 .5h9v7H0z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m1.04 2.674.53-.37.411.297h-.233l.47.416-.158.584h-.249l-.242-.537-.206.537H.748l.47.416-.178.657.53-.37.411.297h-.233l.47.416-.158.584h-.249l-.242-.537-.206.537H.748l.47.416-.178.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.47.416-.178.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.47.416-.178.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.47.416-.178.657.53-.37.513.37-.16-.657.412-.416h-.524l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.19l.425-.296.513.369-.16-.657.412-.416h-.524l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.19l.425-.296.513.369-.16-.657.412-.416h-.524l-.242-.537-.206.537h-.615l.47.416-.158.584h-.249l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.524l-.242-.537-.206.537h-.615l.47.416-.158.584h-.249l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.524l-.242-.537-.206.537h-.615l.47.416-.158.584h-.249l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.524l-.242-.537-.206.537H.748l.47.416-.178.657ZM7.06 4.6l.159-.584-.47-.416h.232l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.537.242.537h.249Zm-1.079 0-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.537.242.537h.249l.159-.584-.47-.416h.232Zm-1.762.416L4.06 5.6h-.249l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.47.416Zm.144-.416h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.47.416-.158.584h-.249l-.242-.537-.206.537Zm-1.303 0 .159-.584-.47-.416h.232l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.537.242.537h.249Zm3.159-1.584L6.06 3.6h-.249l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.47.416ZM3.98 2.6l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.537.242.537h.249l.159-.584-.47-.416h.232Z"
          fill="#F7FCFF"
        />
      </G>
      <Path
        fill="url(#c)"
        style={{
          mixBlendMode: 'overlay',
        }}
        d="M0 .5h16v12H0z"
      />
    </G>
    <Defs>
      <LinearGradient id="c" x1={props.width} y1={0.5} x2={0} y2={props.height} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.3} />
        <Stop offset={0.263} stopOpacity={0.27} />
        <Stop offset={0.37} stopColor="#fff" stopOpacity={0.26} />
        <Stop offset={0.487} stopOpacity={0.55} />
        <Stop offset={0.594} stopOpacity={0.24} />
        <Stop offset={0.736} stopColor="#fff" stopOpacity={0.3} />
        <Stop offset={0.901} stopColor="#272727" stopOpacity={0.22} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="a">
        <Rect y={0.5} width={props.width} height={props.height} rx={1} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default FlagUsaSmall
