import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { getMealsFromDB } from '../utils/database'; 

export default function MealDetailScreen() {
  const params = useLocalSearchParams();
  
  
  const imagePath = params.image as string;

  const imageSource = (imagePath && imagePath.length > 0)
    ? { uri: imagePath }
    : require("../assets/images/unknow.png");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.name}</Text>
      
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      </View>

      <Text style={styles.rating}>Note : {params.rating} / 5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff',
  },
  title: {
    fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#333',
  },
  imageContainer: {
    width: '100%', height: 300, backgroundColor: '#eee', borderRadius: 15, 
    justifyContent: 'center', alignItems: 'center', marginBottom: 20, overflow: 'hidden',
    elevation: 5
  },
  image: {
    width: '100%', height: '100%'
  },
  rating: {
    fontSize: 24, fontWeight: 'bold', color: '#FFA500',
  },
});