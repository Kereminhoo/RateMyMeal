import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="RateMyMeal" />
      <AddMealForm onAddMeal={handleAddMeal} />
      <View style={styles.grid}>
        {meals.map((meal, index) => (
          <MealCard
            key={index}
            name={meal.name}
            rating={meal.rating}
            image={meal.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});


