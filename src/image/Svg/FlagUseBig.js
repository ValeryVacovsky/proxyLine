import * as React from 'react';
import Svg, {Mask, Path, G} from 'react-native-svg';

const FlagUseBig = props => (
  <Svg
    width={32}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={32}
      height={24}>
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h32v24H0V0Z"
        fill="#F7FCFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.667v2h32v-2H0ZM0 18.333v2h32v-2H0ZM0 7.333v2h32v-2H0ZM0 22v2h32v-2H0ZM0 11v2h32v-2H0ZM0 0v2h32V0H0ZM0 3.667v2h32v-2H0Z"
        fill="#E31D1C"
      />
      <Path fill="#2E42A5" d="M0 0h20v13H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m1.722 2.939-.726.509.245-.906-.645-.574h.843l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm4 0-.726.509.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm3.274.509.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.842l.644.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51ZM.996 7.449l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739H.596l.645.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm3.274.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.842l.644.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51ZM.996 11.449l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739H.596l.645.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm3.274.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.842l.644.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm3.274-7.49.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.843l.645.574-.245.906Zm.726 3.49-.726.51.245-.906-.645-.574h.843l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm-.726 4.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.843l.645.574-.245.906ZM3.722 4.938l-.726.51.245-.906-.645-.574h.843l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm3.274.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.843l.645.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm-8.726 4.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.843l.645.574-.245.906Zm4.726-.51-.726.51.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm3.274.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.842l.644.574-.245.906Zm4.726-4.51-.726.51.245-.906-.644-.574h.842l.282-.739.331.739h.718l-.564.574.218.906-.702-.51Zm-.726 4.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.739h-.842l.644.574-.245.906Z"
        fill="#F7FCFF"
      />
    </G>
  </Svg>
);

export default FlagUseBig;
