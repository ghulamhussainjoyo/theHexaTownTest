import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SCREEN_WIDTH } from "../screens/Profile";
import { colors } from "../constants/Itheme";
import { IIconProps } from "../icons/type";

type Props = {
  icon: FC<IIconProps>;
  bgColor: string;
};

const IconButton = ({ icon: Icon, bgColor }: Props) => {
  return (
    <View
      style={{
        paddingVertical: 8,
        // width: (SCREEN_WIDTH - 52) / 3,
        borderRadius: 8,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
      }}
    >
      <Icon style={{ width: 24, height: 24 }} tintColor={colors.content} />
      {/* <Text style={{ fontSize: 18, color: colors.content }}>{title}</Text> */}
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
