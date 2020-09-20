import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { Loading } from "./loading";

const API = "637e731e42ecbb0de6b1e1bb502f3c32";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        this.getWeather(lat, long);
        console.log(long, lat);
      });
    }
  };
  getWeather = async (lat, long) => {
    const weather = await axios.get(
      `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}`
    );
    console.log(weather);
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <View>
        <Text>Loaded</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  container2: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default App;
