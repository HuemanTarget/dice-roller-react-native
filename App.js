import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";

export default function App() {

  playButtonPressed = () => {
    Alert.alert('button worked')
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/images/dice1.png")} />
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
    marginTop: 35,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "white",
  },
});
