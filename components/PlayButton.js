import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default PlayButton = () => (
    <TouchableOpacity onPress={playButtonPressed}>
        <Text style={styles.gamebutton}>Play Game</Text>
      </TouchableOpacity>
)

const styles = StyleSheet.create({
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
});