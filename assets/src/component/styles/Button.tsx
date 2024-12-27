import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../../context/Themecontext";
import { Styles } from "../../styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void; 
  title: string; 
  isBlue?: boolean; 
  isGrey?: boolean; 
  isGreen?: boolean; // New prop
}

export default function Button({ title, onPress, isBlue, isGrey, isGreen }: ButtonProps) {
  const theme = useContext(ThemeContext); 

  return (
    <TouchableOpacity
      style={
        isGreen
          ? Styles.btnGreen // Apply green style if `isGreen` is true
          : isBlue
          ? Styles.btnBlue
          : isGrey
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isGreen || isBlue || isGrey
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
