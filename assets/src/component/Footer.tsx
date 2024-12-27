import * as React from "react";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

export default function Footer() {
  return (
    <View style={Styles.footer}>
      <Text style={Styles.footerText}>
        Calculator by Prasad
      </Text>
    </View>
  );
}
