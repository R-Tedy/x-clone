import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {} from "expo-status-bar";
import { StatusBar } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)"/>
        </Stack>
        <StatusBar barStyle={"dark-content"}/>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
