import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function MealDetailScreen() {
  // On récupère le nom et la note envoyés par l'accueil
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.name}</Text>
      
      <View style={styles.placeholderImage}>
        <Text>Image du plat</Text>
      </View>

      <Text style={styles.rating}>Note : {params.rating} / 5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  placeholderImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500',
  },
});