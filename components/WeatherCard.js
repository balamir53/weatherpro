import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherCardProps {
  location: string;
  temperature: number;
  weatherCondition: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ location, temperature, weatherCondition }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.weatherCondition}>{weatherCondition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'light-blue',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  location: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 5,
  },
  temperature: {
    fontSize: 24,
    color: 'white',
    marginBottom: 5,
  },
  weatherCondition: {
    fontSize: 16,
    color: 'blue',
  },
});

export default WeatherCard;