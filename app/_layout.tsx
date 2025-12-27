import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFA500", 
        },
        headerTintColor: "#fff", 
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      
      <Stack.Screen 
        name="index" 
        options={{ title: "RateMyMeal" }} 
      />
      
      
      <Stack.Screen 
        name="add" 
        options={{ title: "Ajouter un plat", presentation: 'modal' }} 
      />
    </Stack>
  );
}