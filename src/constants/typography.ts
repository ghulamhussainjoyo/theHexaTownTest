import { StyleSheet } from "react-native";
import { colors } from "./Itheme";

export const typography = {
    content: {

    }
}


export const typographyStyles = StyleSheet.create({
    contentDefault: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.content,
        // opacity: 0.8,
    },
    badge: { fontSize: 12, fontWeight: "600", color: colors.content }
})