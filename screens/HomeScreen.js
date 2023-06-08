import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import {
  gold,
  yellow,
  lightgray,
  darkgray,
  pink,
  black,
  blue,
} from "../constants/string_constants";
import { Feather } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Deals from "../components/Deals";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView>
        <View style={styles.navigation}>
          <View style={styles.navLeft}>
            <Image
              source={require("../assets/images/user.jpg")}
              style={styles.navImage}
            ></Image>
            <View style={styles.navLeftContainer}>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  marginTop: 20,
                  marginLeft: 10,
                  color: darkgray,
                }}
              >
                Hey Sannya
              </Text>
              <Text style={{ marginLeft: 15, fontWeight: 400, color: gold }}>
                Welcome Back!
              </Text>
            </View>
          </View>
          <View style={styles.navRight}></View>
        </View>

        <View style={styles.search}>
          <TextInput placeholder="Search for maid services, items ..." />
          <Feather name="search" size={24} color={black} />
        </View>
        <Carousel />
        <Services />
        <Deals />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  navigation: {
    marginTop: 50,
    justifyContent: "space-between",
  },
  navLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  navImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
    borderColor: black,
  },
  navRight: {
    justifyContent: "flex-end",
  },
  search: {
    margin: 30,
    backgroundColor: lightgray,
    padding: 10,
    borderRadius: 20,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
