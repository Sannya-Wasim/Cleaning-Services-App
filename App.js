import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { yellow } from "./constants/string_constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import FAQs from "./screens/FAQs";
import Items from "./screens/Items";

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
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              title: " ",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: " ",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FAQs"
            component={FAQs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Items"
            component={Items}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {/* <Navbar navigation={navigation} /> */}
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: yellow,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
