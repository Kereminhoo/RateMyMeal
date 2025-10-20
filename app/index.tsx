import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import MealCard from "../components/MealCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="RateMyMeal" />
      <View style={styles.grid}>
        <MealCard name="Iskender" rating={4} image={require("../assets/images/meal1.jpg")} />
        <MealCard name="Etliekmek" rating={5} image={require("../assets/images/meal2.jpg")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
