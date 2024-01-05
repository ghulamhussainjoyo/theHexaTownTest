import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/Itheme";

type Props = { dec: string };

const DescriptionItem = ({ dec }: Props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      <View
        style={{
          width: 4,
          height: 4,
          borderRadius: 2,
          backgroundColor: colors.content,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: colors.content,
          // opacity: 0.8,
        }}
      >
        {dec}
      </Text>
    </View>
  );
};

export default DescriptionItem;

const styles = StyleSheet.create({});
