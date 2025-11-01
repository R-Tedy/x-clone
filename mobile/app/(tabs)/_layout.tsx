import { Redirect, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  const {isSignedIn} = useAuth();

  if (!isSignedIn) return <Redirect href={"/(auth)"}/>
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1da1f2",
        tabBarInactiveTintColor: "#657786",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e1e8ed",
          height: 50 + insets.bottom,
          paddingTop: 8,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({color, size}) => <Feather name="home" size={size} color={color} />
        }}
      />
    </Tabs>
  )
}