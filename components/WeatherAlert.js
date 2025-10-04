const WeatherAlert: React.FC<{ 
  alertMessage: string; 
}> = ({ alertMessage }) => {

  // Function to handle alert dismissal
  const dismissAlert = () => {
    // Implement alert dismissal logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.alertText}>{alertMessage}</Text>
      <TouchableOpacity style={styles.dismissButton} onPress={dismissAlert}>
        <Text style={styles.dismissText}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'light-blue',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  alertText: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
  },
  dismissButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  dismissText: {
    color: 'blue',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default WeatherAlert;