import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { YELLOW } from "./constants/string_constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/HomeScreen";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import FAQs from "./screens/FAQs";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          {showSplash ? (
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          ) : null}
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              title: " ",
              headerStyle: { backgroundColor: YELLOW },
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: " ",
              // headerStyle: { backgroundColor: YELLOW },
              headerStyle: {
                backgroundColor: "#FFD700",
                borderBottomWidth: 4,
                borderBottomColor: "#FF8C00",
              },
              headerTitleStyle: {
                color: "#FFFFFF",
              },
            }}
          />
          <Stack.Screen
            name="FAQs"
            component={FAQs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
