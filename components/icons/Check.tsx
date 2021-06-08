import React from 'react';
import Svg, {SvgProps, Path} from "react-native-svg"

export default function Check(props: SvgProps) {
  return (
    <Svg width={9} height={9} {...props}>
      <Path
        fill="none"
        stroke="#FFF"
        strokeWidth={2}
        d="M1 4.304L3.696 7l6-6"
      />
    </Svg>
  )
}
