import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./styles/Button";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Color";

export default function MyKeyboard({
  addToHistory = (expression: string, result: string) => {
    console.log("History Added: ", expression, "=", result);
  },
}: {
  addToHistory?: (expression: string, result: string) => void;
}) {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<number | null>(null);
  const [history, setHistory] = React.useState<{ expression: string; result: string }[]>([]);

  const handleNumberPress = (buttonValue: string) => {
    if (result !== null) {
      // If there's a result already, replace the first number with the result.
      setFirstNumber(buttonValue);
      setResult(null);
    } else {
      if (firstNumber.length < 10) {
        setFirstNumber(firstNumber + buttonValue);
      }
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    if (result !== null) {
      // Use the result as the second number if an operation is pressed after a result.
      setSecondNumber(result.toString());
      setFirstNumber("");
      setOperation(buttonValue);
    } else if (firstNumber) {
      setOperation(buttonValue);
      setSecondNumber(firstNumber);
      setFirstNumber("");
    }
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    if (firstNumber && secondNumber && operation) {
      let computation;
      switch (operation) {
        case "+":
          computation = parseFloat(secondNumber) + parseFloat(firstNumber);
          break;
        case "-":
          computation = parseFloat(secondNumber) - parseFloat(firstNumber);
          break;
        case "*":
          computation = parseFloat(secondNumber) * parseFloat(firstNumber);
          break;
        case "/":
          computation =
            parseFloat(firstNumber) !== 0
              ? parseFloat(secondNumber) / parseFloat(firstNumber)
              : "Error";
          break;
        case "％":
          computation = parseFloat(firstNumber) !== 0
            ? parseFloat(secondNumber) % parseFloat(firstNumber)
            : "Error";
          break;
        default:
          computation = "Error";
      }

      if (computation !== "Error") {
        setResult(computation as number);
        addToHistory(
          `${secondNumber} ${operation} ${firstNumber}`,
          computation.toString()
        );
      }

      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
    }
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [Styles.screenFirstNumber, { fontSize: 50, color: myColors.result }]
          }
        >
          {result.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGrey onPress={clear} />
        <Button title="X^2" isGrey onPress={() => handleOperationPress("X^2")} />
        <Button title="％" isGrey onPress={() => handleOperationPress("％")} />
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
        <Button title="=" isGreen onPress={getResult} />
      </View>
    </View>
  );
}
