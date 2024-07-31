import { Stack } from "expo-router";
import { ImcCalculatorProvider } from "@/shared/contexts";

export default function RootLayout() {
  return (
    <ImcCalculatorProvider>
      <Stack>
        <Stack.Screen
          name="(global)"
          options={{
            title: "Groupe global",
            headerShown: false,
          }}
        />
      </Stack>
    </ImcCalculatorProvider>
  );
}
