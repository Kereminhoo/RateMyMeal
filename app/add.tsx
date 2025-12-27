import { View, StyleSheet } from 'react-native';
import AddMealForm from '../components/AddMealForm'; 
import { useRouter } from 'expo-router';

export default function AddMealScreen() {
  const router = useRouter();

  
  const handleAdd = (meal: any) => {
    console.log("Nouveau plat:", meal);
    
    router.back(); // Ferme la fenêtre et retourne à l'accueil
  };

  return (
    <View style={styles.container}>
      <AddMealForm onAddMeal={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});