import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function ShowWeather({ weather, temp, region }) {
  console.log("ha");
  return (
    <div>
      <h1>{weather}</h1>
      <h1>{temp}</h1>
      <h1>{region}</h1>
    </div>
  );
}
