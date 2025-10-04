const LocationDetection: React.FC = () => {
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Location permission not granted');
        }

        const location = await Location.getCurrentPositionAsync({});
        setLocation(`Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{location}</Text>
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
  text: {
    fontSize: 20,
    color: 'blue',
  },
});

export default LocationDetection;