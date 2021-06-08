import React from 'react';
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Circle,
} from "react-native-svg"

export default function CheckGradient(props: SvgProps) {
  return (
    <Svg height={30} width={30} {...props}>
      <Defs>
        <LinearGradient id="prefix__a" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#57ddff" />
          <Stop offset="100%" stopColor="#c058f3" />
        </LinearGradient>
      </Defs>
      <Circle cx={15} cy={15} fill="url(#prefix__a)" r={15} />
    </Svg>
  )
}
