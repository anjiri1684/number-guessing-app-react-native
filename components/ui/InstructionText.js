import { StyleSheet, Text } from "react-native";
import Colors from "../../util/colors";

function InstructionText({ children }) {
  return <Text style={styles.instructionsText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
