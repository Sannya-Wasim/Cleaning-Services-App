import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
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

const Deals = () => {
  const deals = [
    {
      id: "0",
      image: require("../assets/images/deal-01.png"),
    },
    {
      id: "11",
      image: require("../assets/images/deal-02.png"),
    },
    {
      id: "12",
      image: require("../assets/images/deal-03.png"),
    },
    {
      id: "13",
      image: require("../assets/images/deal-04.png"),
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "500",
          marginBottom: 7,
          margin: 10,
          color: darkgray,
        }}
      >
        Discounted Deals
      </Text>
      <ScrollView horizontal horizontalScrollIndicator={false}>
        {deals.map((deal, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                margin: 10,
                backgroundColor: "white",
                padding: 20,
                borderRadius: 7,
              }}
            >
              <Image
                source={deal.image}
                style={{ width: 130, height: 200 }}
              ></Image>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({});
