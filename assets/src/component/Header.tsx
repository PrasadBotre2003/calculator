import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";


export default function Header() {
  return (
    <View style={Styles.header}>
      <Text style={Styles.headerText}>Avegen</Text>
    </View>
  );
}
