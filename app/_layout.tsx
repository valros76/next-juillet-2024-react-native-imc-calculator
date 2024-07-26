import { Stack } from "expo-router";


export default function RootLayout(){
  return(
    <Stack>
      <Stack.Screen 
        name="(global)" 
        options={{
          title: "Groupe global",
          headerShown: false
        }}
      />
    </Stack>
  );
}