import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native"; 
import Header from "../components/Header";
import MealCard from "../components/MealCard";
import AddMealForm from "../components/AddMealForm";

export default function HomeScreen() {
  const [meals, setMeals] = useState([
    { name: "Iskender", rating: 4, image: require("../assets/images/meal1.jpg") },
    { name: "Etliekmek", rating: 5, image: require("../assets/images/meal2.jpg") },
  ]);

  const handleAddMeal = (newMeal: { name: string; rating: number; image: any }) => {
    setMeals((prevMeals) => [newMeal, ...prevMeals]);
  };

  return (
    <View style={styles.container}>
      <Header title="RateMyMeal" />
      <AddMealForm onAddMeal={handleAddMeal} />
      
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
        numColumns={2} // afficher en grille de 2 colonnes
        columnWrapperStyle={styles.grid} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  listContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  grid: {
    justifyContent: "space-between", // pour espacer les elements dans la grille
    paddingHorizontal: 10,
  },
});