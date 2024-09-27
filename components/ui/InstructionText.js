import { StyleSheet, Text } from "react-native";
import Colors from "../../util/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionsText: {
    fontWeight: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
