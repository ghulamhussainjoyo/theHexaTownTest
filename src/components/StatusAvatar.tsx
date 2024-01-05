import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/Itheme";

type Props = {};

const StatusAvatar = ({}: Props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: 75,
          height: 75,
          borderRadius: 75 / 2,
          overflow: "hidden",
          borderColor: colors.disable,
          borderWidth: 0.5,
          padding: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 66,
            height: 66,
            borderRadius: 66 / 2,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "gold",
          }}
        >
          <Image
            source={require("../../assets/logo.jpeg")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <Text style={{ color: colors.content }}>Events</Text>
    </View>
  );
};

export default StatusAvatar;

const styles = StyleSheet.create({});
