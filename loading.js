import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function Loading() {
  return (
    <View style={styles.contaier}>
      <Text style={styles.text}> Getting the weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 100,
    paddingHorizontal: 30,
    backgroundColor: "yellow",
  },
  text: {
    color: "#3c3c3c",
    fontSize: 30,
  },
});
