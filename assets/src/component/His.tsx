import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Keyboard } from "react-native";
import MyKeyboard from "./Mykeyboard";

export default function CalculatorApp() {
  const [history, setHistory] = useState<
    { expression: string; result: string }[]
  >([]);

  const addToHistory = (expression: string, result: string) => {
    setHistory((prevHistory) => [
      ...prevHistory,
      { expression, result },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.historyTitle}>Calculation History</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>
            {item.expression} = {item.result}
          </Text>
        )}
      />
      <MyKeyboard addToHistory={addToHistory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});
