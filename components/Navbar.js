import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { darkgray, yellow, white } from "../constants/string_constants";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

const Navbar = ({ navigation }) => {
  const [activeIcon, setActiveIcon] = useState("HomeScreen");

  const handlePress = (iconName) => {
    setActiveIcon(iconName);
    navigation.navigate(iconName);
  };
  return (
    <View style={styles.navContainer}>
      <View style={styles.NavBar}>
        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => handlePress("HomeScreen")}
        >
          <Entypo
            name="home"
            size={24}
            color={activeIcon === "HomeScreen" ? yellow : white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => handlePress("Login")}
        >
          <MaterialIcons
            name="cleaning-services"
            size={24}
            color={activeIcon === "Login" ? yellow : white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => handlePress("Items")}
        >
          <MaterialCommunityIcons
            name="spray-bottle"
            size={24}
            color={activeIcon === "Items" ? yellow : white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <FontAwesome5 name="user" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 10,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: darkgray,
    width: "100%",
    height: 55,
    justifyContent: "space-evenly",
    borderRadius: 40,
    // alignItems: "center",
  },
  navIcon: {
    padding: 14,
  },
});
