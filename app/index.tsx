import React, { useState, useCallback } from "react";
import { View, StyleSheet, FlatList, Button, TouchableOpacity, Text } from "react-native";
import { useRouter, useFocusEffect } from "expo-router"; 
import MealCard from "../components/MealCard";
import { getMealsFromDB } from "../utils/database";

export default function HomeScreen() {
  const router = useRouter(); 
  const [meals, setMeals] = useState<any[]>([]);

  
  useFocusEffect(
    useCallback(() => {
      async function fetchMeals() {
        const data = await getMealsFromDB();
        setMeals(data);
      }
      fetchMeals();
    }, [])
  );

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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => {
              router.push({
                pathname: "/detail",
                params: { 
                  id: item.id, 
                  name: item.name, 
                  rating: item.rating 
                }
              });
            }}
          >
           
            <MealCard
              name={item.name}
              rating={item.rating}
              image={require("../assets/images/unknow.png")} 
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        columnWrapperStyle={styles.grid}
        ListEmptyComponent={<Text style={{marginTop: 50}}>Aucun plat enregistré.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  buttonContainer: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#eee" },
  listContent: { paddingVertical: 20, alignItems: "center" },
  grid: { justifyContent: "space-between", paddingHorizontal: 10 },
});