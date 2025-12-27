import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import { useRouter } from "expo-router"; // Indispensable pour naviguer
import MealCard from "../components/MealCard";
// Note: On n'importe plus AddMealForm ici !

export default function HomeScreen() {
  const router = useRouter(); 

  const [meals, setMeals] = useState([
    { name: "Iskender", rating: 4, image: require("../assets/images/meal1.jpg") },
    { name: "Etliekmek", rating: 5, image: require("../assets/images/meal2.jpg") },
  ]);

  return (
    <View style={styles.container}>
      {/* Le Header est géré par _layout maintenant, plus besoin du composant Header ici */}
      
      <View style={styles.buttonContainer}>
        <Button 
          title="+ Ajouter un plat" 
          color="#FFA500"
          onPress={() => router.push("/add")} 
        />
      </View>

      <FlatList
        data={meals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MealCard
            name={item.name}
            rating={item.rating}
            image={item.image}
          />
        )}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        columnWrapperStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listContent: {
    paddingVertical: 20,
    alignItems: "center",
  },
  grid: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});