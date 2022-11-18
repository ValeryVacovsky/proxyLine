import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SettingsButton(props) {
  return (
    <Svg
      width={16}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Path
        d="M8.946 1.5v0c.351 0 .665.22.784.552l.423 1.179v0a.838.838 0 0 0 .369.44l1.256.725v0c.17.098.37.133.564.098l1.233-.222v0a.833.833 0 0 1 .87.403l.668 1.15v0a.833.833 0 0 1-.084.955l-.809.957v0a.833.833 0 0 0-.197.538v1.45c0 .197.07.388.197.538l.81.957v0c.226.269.259.65.083.955l-.667 1.15v0a.833.833 0 0 1-.87.403l-1.234-.222v0a.833.833 0 0 0-.564.098l-1.255.725v0a.839.839 0 0 0-.369.44l-.423 1.18v0a.833.833 0 0 1-.785.551H7.613v0a.833.833 0 0 1-.785-.552l-.423-1.179v0a.84.84 0 0 0-.367-.44l-1.257-.725v0a.833.833 0 0 0-.564-.098l-1.234.222v0a.833.833 0 0 1-.87-.403l-.667-1.15v0a.833.833 0 0 1 .083-.955l.81-.957v0a.833.833 0 0 0 .197-.538v-1.45 0a.833.833 0 0 0-.198-.538l-.8-.957v0a.833.833 0 0 1-.084-.955l.667-1.15v0a.833.833 0 0 1 .87-.403l1.233.222v0c.194.035.394 0 .564-.098l1.257-.725h0c.17-.1.3-.255.368-.44l.423-1.18v0a.833.833 0 0 1 .777-.551h1.333Z"
        // eslint-disable-next-line react/destructuring-assignment
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.28 11.292a2.292 2.292 0 1 0 0-4.584 2.292 2.292 0 0 0 0 4.584Z"
        // eslint-disable-next-line react/destructuring-assignment
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SettingsButton;
