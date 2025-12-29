import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type AddMealFormProps = {
  onAddMeal: (meal: { name: string; rating: number; image: any }) => void;
};

export default function AddMealForm({ onAddMeal }: AddMealFormProps) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

const handleAdd = () => {
   
    if (!name || !rating) return;

    const newMeal = {
      name: name,
      rating: Number(rating), 
      image: require("../assets/images/unknow.png"),
    };

    onAddMeal(newMeal);
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom du plat"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Note (ex : 4)"
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}
      />
      <Button title="Ajouter le plat" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  
});



