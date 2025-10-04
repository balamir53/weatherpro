import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedWeatherIcon from './AnimatedWeatherIcon';
import WeatherCard from './WeatherCard';
import LocationDetection from './LocationDetection';
import WeatherAlert from './WeatherAlert';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <AnimatedWeatherIcon />
      <WeatherCard />
    </View>
  );
};

const ForecastScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forecast Screen</Text>
      {/* Add 5-day weather forecast content here */}
    </View>
  );
};

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Screen</Text>
      <LocationDetection />
    </View>
  );
};

const AlertsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerts Screen</Text>
      <WeatherAlert />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'light-blue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
});

export { HomeScreen, ForecastScreen, LocationScreen, AlertsScreen };