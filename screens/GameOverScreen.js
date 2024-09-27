import { Image, StyleSheet, View, ViewBase } from "react-native";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View>
      <Title>Game Over</Title>
      <View>
        <Image source={require("../assets/images/success.png")} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
  },
});
