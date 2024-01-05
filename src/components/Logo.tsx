import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Logo = ({}: Props) => {
  return (
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: 45,
        overflow: "hidden",
        marginBottom: 8,
      }}
    >
      <Image
        source={require("../../assets/logo.jpeg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
