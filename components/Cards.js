import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { white, black, blue, red } from "../constants/string_constants";

const Cards = ({ item }) => {
  return (
    <View style={styles.cardsContainer}>
      <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
      <View style={{ paddingLeft: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: 600 }}>{item.name}</Text>
        <Text>Quantity : {item.quantity}</Text>
        <Text
          style={{
            alignItems: "flex-end",
            color: red,
            fontSize: 18,
            fontWeight: 400,
          }}
        >
          Rs.{item.price}
        </Text>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: white,
    margin: 12,
    padding: 15,
    backgroundColor: blue,
    borderRadius: 20,
  },
});
