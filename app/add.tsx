import { View, StyleSheet, Alert } from 'react-native';
import AddMealForm from '../components/AddMealForm'; 
import { useRouter } from 'expo-router';
import { addMealToDB } from '../utils/database';

export default function AddMealScreen() {
  const router = useRouter();

  const handleAdd = async (meal: any) => {
    
    const nameToCheck = meal.name;
    
    
    const ratingToCheck = meal.rating ? Number(meal.rating) : 0;
    
   
    if (!nameToCheck || ratingToCheck === 0) {
      Alert.alert("Erreur", "Le nom et une note valide sont obligatoires !");
      return;
    }

    try {
      
      await addMealToDB(nameToCheck, ratingToCheck, "");
      router.back();
    } catch (e) {
      console.error("Erreur lors de la sauvegarde :", e);
      Alert.alert("Erreur", "Impossible de sauvegarder le plat.");
    }
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