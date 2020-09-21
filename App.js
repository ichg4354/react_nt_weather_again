import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { Loading } from "./loading";

const API = "bfab82a06703b1954a1b1d5a818959f0";

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
        this.setState({ isLoading: false });
      });
    }
  };
  getWeather = async (lat, long) => {
    const weather = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}&units=metric`
    );
    const { data } = weather;
    console.log(data);
    const weatherData = {
      temp: data.main.temp,
      region: data.name,
      weather: data.weather[0].main,
    };
    this.setState({ weatherData: weatherData });
    console.log(this.state.weatherData);
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
