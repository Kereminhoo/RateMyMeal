import { View, Text, Image, StyleSheet } from "react-native";

type MealCardProps = {
  name: string;
  rating: number;
  image: any;  //any sert pour image source type
};

export default function MealCard({ name, rating, image }: MealCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.rating}> {rating}/5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    margin: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "75%",
  },
  info: {
    padding: 5,
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 12,
    color: "#ff9500",
  },
});
