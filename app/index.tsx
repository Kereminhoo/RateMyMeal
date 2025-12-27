import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import MealCard from "../components/MealCard";

export default function HomeScreen() {
  const router = useRouter(); 

  const [meals, setMeals] = useState([
    { name: "Iskender", rating: 4, image: require("../assets/images/meal1.jpg") },
    { name: "Etliekmek", rating: 5, image: require("../assets/images/meal2.jpg") },
  ]);

  return (
    <View style={styles.container}>
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
        
          <TouchableOpacity 
            onPress={() => {
              router.push({
                pathname: "/detail",
                params: { name: item.name, rating: item.rating }
              });
            }}
          >
            <MealCard
              name={item.name}
              rating={item.rating}
              image={item.image}
            />
          </TouchableOpacity>
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