import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function ShowWeather({ weather, temp, region }) {
  console.log("ha");
  return (
    <View>
      <Text>{weather}</Text>
      <Text>{temp}</Text>
      <Text>{region}</Text>
    </View>
  );
}
