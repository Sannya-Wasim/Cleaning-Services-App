import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import { darkgray } from "../constants/string_constants";

const Items = ({ navigation }) => {
  const Items = [
    {
      id: 0,
      image: "https://cdn-icons-png.flaticon.com/512/1748/1748926.png",
      name: "Mop",
      quantity: 0,
      price: 10,
    },
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/512/1059/1059246.png",
      name: "Broom",
      quantity: 0,
      price: 10,
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/3365/3365197.png",
      name: "Floor Cleaner",
      quantity: 0,
      price: 10,
    },
    {
      id: 3,
      image:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/wiper-11-708920.png",
      name: "Wiper",
      quantity: 0,
      price: 10,
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/512/1216/1216355.png",
      name: "Window Cleaners",
      quantity: 0,
      price: 10,
    },
    {
      id: 5,
      image: "https://cdn-icons-png.flaticon.com/512/1059/1059226.png",
      name: "Vacuum",
      quantity: 0,
      price: 10,
    },
    {
      id: 6,
      image: "https://cdn-icons-png.flaticon.com/512/3238/3238669.png",
      name: "Detergent",
      quantity: 0,
      price: 10,
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: darkgray,
            marginTop: 60,
            marginLeft: 30,
            marginBottom: 20,
          }}
        >
          Products
        </Text>
        {Items.map((item) => {
          return <Cards item={item} />;
        })}
      </ScrollView>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Items;

const styles = StyleSheet.create({});
