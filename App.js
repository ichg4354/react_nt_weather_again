import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { Loading } from "./Loading";
import { ShowWeather } from "./Weather";

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
    // console.log(data);
    this.setState({
      temp: data.main.temp,
      region: data.name,
      weather: data.weather[0].main,
    });
    // console.log(this.state.weatherData);
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, region, weather } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <ShowWeather weather={weather} temp={temp} region={region} />
    );
  }
}

const styles = StyleSheet.create({});

export default App;
