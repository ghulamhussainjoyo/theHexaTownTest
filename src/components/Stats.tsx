import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/Itheme";

type Props = {
  title: string;
  description: string;
};

const Stats = ({ description, title }: Props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "800", color: colors.content }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: "white",
          opacity: 0.9,
        }}
      >
        {description}
      </Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({});
