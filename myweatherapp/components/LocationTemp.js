import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

const LocationTemp = ({ current, street }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text_wrapper}>
        <Text style={styles.temp}>{Math.floor(current.temp)}</Text>
        <MaterialCommunityIcons
          name="temperature-celsius"
          size={40}
          color="black"
        />
      </View>
      <View style={styles.text_wrapper}>
        <EvilIcons
          name="location"
          style={styles.location}
          size={30}
          color="black"
        />
        <Text style={styles.street}>{street}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  temp: {
    fontSize: 50,
    fontWeight: "700",
  },
  text_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginRight: 5,
  },
  street: {
    fontSize: 28,
    fontWeight: "300",
  },
});

export default LocationTemp;
