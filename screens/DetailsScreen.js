import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Button, Card } from './components';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Details" />
      <Card>
        <Text style={styles.text}>Current Weather: Sunny</Text>
        <Text style={styles.text}>Temperature: 25°C</Text>
        <Text style={styles.text}>Wind Speed: 10 km/h</Text>
      </Card>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'light-blue',
  },
  text: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
});

export default DetailsScreen;