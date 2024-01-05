import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../screens/Profile";
import { colors } from "../constants/Itheme";

type Props = {
  title: String;
  bgColor: string;
};

const Button = ({ title, bgColor }: Props) => {
  return (
    <View
      style={{
        paddingVertical: 8,
        // width: (SCREEN_WIDTH - 52) / 3,
        borderRadius: 8,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 22,
      }}
    >
      <Text style={{ fontSize: 18, color: colors.content }}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
