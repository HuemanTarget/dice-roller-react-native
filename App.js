import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [uri, setUri] = useState(require("./src/images/dice1.png"));
  const [uriTwo, setUriTwo] = useState(require("./src/images/dice5.png"));

  getRandomValue = () => {
    //add 1 to random math so you don't get a zero
    return Math.floor(Math.random() * 6) + 1;
  };

  playButtonPressed = () => {
    let rNumber = getRandomValue();
    let rNumberTwo = getRandomValue();

    switch (rNumber) {
      case 1:
        setUri(require("./src/images/dice1.png"));
        break;
      case 2:
        setUri(require("./src/images/dice2.png"));
        break;
      case 3:
        setUri(require("./src/images/dice3.png"));
        break;
      case 4:
        setUri(require("./src/images/dice4.png"));
        break;
      case 5:
        setUri(require("./src/images/dice5.png"));
        break;
      case 6:
        setUri(require("./src/images/dice6.png"));
        break;
      default:
        setUri(require("./src/images/dice1.png"));
        break;
    }

    switch (rNumberTwo) {
      case 1:
        setUriTwo(require("./src/images/dice1.png"));
        break;
      case 2:
        setUriTwo(require("./src/images/dice2.png"));
        break;
      case 3:
        setUriTwo(require("./src/images/dice3.png"));
        break;
      case 4:
        setUriTwo(require("./src/images/dice4.png"));
        break;
      case 5:
        setUriTwo(require("./src/images/dice5.png"));
        break;
      case 6:
        setUriTwo(require("./src/images/dice6.png"));
        break;
      default:
        setUriTwo(require("./src/images/dice1.png"));
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.dice} source={uri} />
        <Image style={styles.dice} source={uriTwo} />
      </View>
      <TouchableOpacity onPress={playButtonPressed}>
        <Text style={styles.gamebutton}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E74292",
    alignItems: "center",
    justifyContent: "center",
  },
  gamebutton: {
    marginTop: 45,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "white",
  },
  dice: {
    width: 200,
    height: 200
  },
});
