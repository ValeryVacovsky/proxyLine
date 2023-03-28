import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function NotesTab(props) {
  return (
    <Svg
      width={15}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <Path
        d="M14.25 7.25v6a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5V2.75a1.5 1.5 0 0 1 1.5-1.5H7.5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m5.25 10.25 2.362-.292a.753.753 0 0 0 .44-.214l5.723-5.723a1.624 1.624 0 0 0-2.296-2.296l-5.67 5.67a.75.75 0 0 0-.213.425l-.346 2.43v0Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NotesTab
