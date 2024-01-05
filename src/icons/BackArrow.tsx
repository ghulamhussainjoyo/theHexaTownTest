import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IIconProps } from "./type";
const BackArrow = ({ style, tintColor }: IIconProps) => (
  <Svg fill="none" style={style}>
    <Path
      fill={tintColor ? tintColor : "#2B64E3"}
      fillOpacity={0.9}
      fillRule="evenodd"
      d="m6.625 15.528 7.463-6.93-1.435-1.545-8.255 7.666v3.418l8.255 7.665 1.435-1.545-7.129-6.62h21.45v-2.109H6.625Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BackArrow;
