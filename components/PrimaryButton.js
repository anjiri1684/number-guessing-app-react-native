import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
  const buttonPressHandler = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
        onPress={buttonPressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#72063c",
    padding: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
