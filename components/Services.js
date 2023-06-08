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

const Services = () => {
  const services = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-q3ocnXVylUTIRj4TPvB3g7LayaXcjakiAsCa_Y&s",
      name: "Cleaning \n Pakages",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry \n Pakages",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Dry \n Cleaning",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning \n supplies",
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
        Our Services
      </Text>
      <ScrollView horizontal horizontalScrollIndicator={false}>
        {services.map((service, index) => {
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
                source={{ uri: service.image }}
                style={{ width: 70, height: 70 }}
              ></Image>
              <Text
                style={{
                  marginTop: 10,
                  textAlign: "center",
                }}
              >
                {service.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
