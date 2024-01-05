import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IIconProps } from "./type";
const AddUser = ({ style, tintColor }: IIconProps) => (
  <Svg style={style} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={tintColor ? tintColor : "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 20v-1a5 5 0 0 1 5-5h3.75m4.785-.036V17.5m0 0v3.535m0-3.535h3.536m-3.536 0H14M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </Svg>
);
export default AddUser;
