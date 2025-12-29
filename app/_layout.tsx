import { Stack } from "expo-router";
import { useEffect } from "react";
import { initDatabase } from "../utils/database";

export default function RootLayout() {

  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#FFA500" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "RateMyMeal" }} />
      <Stack.Screen name="add" options={{ title: "Ajouter un plat", presentation: 'modal' }} />
    </Stack>
  );
}