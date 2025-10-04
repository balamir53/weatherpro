import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from './Header';
import Card from './Card';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'light-blue' }}>
            <Header title="WeatherPro" />
            <Card>
                <Text style={{ fontSize: 24, color: 'blue' }}>Current Weather: Sunny</Text>
            </Card>
            <Button title="View 5-Day Forecast" onPress={() => navigation.navigate('ForecastScreen')} />
        </View>
    );
};

export default HomeScreen;