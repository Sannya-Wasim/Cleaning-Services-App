import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { gold } from "../constants/string_constants";

const HomeScreen = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
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
  },
  navRight: {
    justifyContent: "flex-end",
  },
});
