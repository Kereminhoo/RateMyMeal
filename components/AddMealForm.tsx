import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image, Text, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';

type AddMealFormProps = {
  onAddMeal: (meal: { name: string; rating: number; image: string }) => void;
};

export default function AddMealForm({ onAddMeal }: AddMealFormProps) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Erreur", "Accès à la caméra refusé !");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleAdd = () => {
    if (!name || !rating) {
      Alert.alert("Erreur", "Merci de remplir le nom et la note.");
      return;
    }

    
    const cleanRating = rating.replace(',', '.');
    
    
    const ratingNumber = parseFloat(cleanRating);

    if (isNaN(ratingNumber) || ratingNumber < 0 || ratingNumber > 5) {
      Alert.alert("Erreur", "La note doit être un nombre entre 0 et 5.");
      return;
    }

    const newMeal = {
      name,
      rating: ratingNumber,
      image: imageUri || "", 
    };
    onAddMeal(newMeal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom du plat :</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Kebab complet"
        value={name}
        onChangeText={setName}
      />
      
      <Text style={styles.label}>Note (sur 5) :</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 4.5"
        // clavier decimal pour mettre des chiffre   virgule aussi 
        keyboardType="decimal-pad" 
        value={rating}
        onChangeText={setRating}
        maxLength={4} // Permet d'ecrire a virgule mais pas trop long max 1 chiffre 
      />

      <Text style={styles.label}>Photo du plat :</Text>
      <TouchableOpacity onPress={takePhoto} style={styles.imagePreview}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholderContainer}>
             <Text style={styles.emoji}>📷</Text>
             <Text style={styles.placeholderText}>Appuyer pour prendre une photo</Text>
          </View>
        )}
      </TouchableOpacity>
      
      <Button title="Enregistrer le plat" onPress={handleAdd} color="#FFA500" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15, backgroundColor: "#fff", borderRadius: 10, elevation: 4, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5
  },
  label: {
    fontWeight: "bold", marginBottom: 5, fontSize: 16, color: "#333"
  },
  input: {
    borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16, backgroundColor: "#fafafa"
  },
  imagePreview: {
    width: '100%', height: 200, marginBottom: 20, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#f0f0f0', borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: "#ddd", borderStyle: "dashed"
  },
  image: {
    width: '100%', height: '100%',
  },
  placeholderContainer: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 40, marginBottom: 5
  },
  placeholderText: {
    color: '#888', fontWeight: "500"
  }
});