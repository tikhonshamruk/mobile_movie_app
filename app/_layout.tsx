import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)"/>
    <Stack.Screen  name="(movies)"
    options={{headerShown:false}}/>
    </Stack>
}
