import { Stack } from "expo-router";
import { ImcCalculatorProvider } from "@/shared/contexts";
import FontProvider from "@/shared/contexts/FontContext";

export default function RootLayout() {
  return (
    <FontProvider>
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
    </FontProvider>
  );
}
