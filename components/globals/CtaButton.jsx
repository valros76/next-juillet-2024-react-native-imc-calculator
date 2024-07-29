import { useFonts } from "expo-font";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

export default function CtaButton({ props }) {

  const [loaded, error] = useFonts({
    "TitilliumWeb-Bold": require("@/assets/fonts/TitilliumWeb-Bold.ttf")
  });

  const { text, borderRadius, withIcon, iconType, actionOnPress, disabled, addStyles, addTextStyles } = props;

  const [buttonIsHover, setButtonIsHover] = useState(false);
  const [buttonIsPressed, setButtonIsPressed] = useState(false);

  const handleShowIcon = (type) => {
    switch (type) {
      case "edit":
        return (<Entypo name="edit" size={18} color="#ffffff" />);
      case "history":
        return (<Entypo name="clock" size={18} color="#ffffff" />);
      case "profile":
        return (<Entypo name="user" size={18} color="#ffffff" />);
      case "settings":
      default:
        return (<Entypo name="cog" size={18} color="#ffffff" />);
    }
  };

  return (
    <Pressable
      style={{
        ...styles.customButton,
        borderRadius: borderRadius ?? 8,
        borderWidth: 1,
        borderColor: (buttonIsHover || buttonIsPressed) ? "#1D3124" : "transparent",
        backgroundColor: disabled ? "#79797A" : styles.customButton.backgroundColor,
        ...addStyles
      }}
      onPress={() => actionOnPress()}
      onHoverIn={() => setButtonIsHover(() => true)}
      onHoverOut={() => setButtonIsHover(() => false)}
      onPressIn={() => setButtonIsPressed(() => true)}
      onPressOut={() => setButtonIsPressed(() => false)}
      disabled={disabled}
    >
      <Text style={{
        ...styles.customButtonText,
        ...addTextStyles
      }}>
        {withIcon && handleShowIcon(iconType)} {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  customButton: {
    width: "auto",
    backgroundColor: "#E59560",
    marginVertical: 8,
    padding: 12,
  },
  customButtonText: {
    fontFamily: "TitiliumWeb-Bold, system-ui, sans-serif",
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFFFFF",
  }
});