import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const AnotherTemp = ({ current }) => {
  const deg = current.wind_deg;
  // console.log();
  const degCalc = () => {
    if ((deg >= 0 && deg < 22.5) || (deg >= 337.5 && deg < 0)) {
      return "북";
    } else if (deg >= 22.5 && deg < 67.5) {
      return "북동";
    } else if (deg >= 67.5 && deg < 112.5) {
      return "동";
    } else if (deg >= 112.5 && deg < 157.5) {
      return "남동";
    } else if (deg >= 157.5 && deg < 202.5) {
      return "남";
    } else if (deg >= 202.5 && deg < 247.5) {
      return "남서";
    } else if (deg >= 247.5 && deg < 292.5) {
      return "서";
    } else if (deg >= 292.5 && deg < 337.5) {
      return "북서";
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.feels_like}>
        <FontAwesome5 name="temperature-high" size={24} color="black" />
        <Text>체감온도</Text>
        <View style={styles.text_wrapper}>
          <Text>{Math.floor(current.feels_like)}</Text>
          <MaterialCommunityIcons
            name="temperature-celsius"
            size={15}
            color="black"
          />
        </View>
      </View>
      <View style={styles.wind_speed}>
        <FontAwesome5 name="wind" size={24} color="black" />
        <Text>{degCalc()}풍</Text>
        <Text>{current.wind_speed}m/s</Text>
      </View>
      <View style={styles.humidity}>
        <Ionicons name="water-outline" size={24} color="black" />
        <Text>습도</Text>
        <Text>{current.humidity}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  feels_like: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    opacity: 0.4,
  },
  text_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  wind_speed: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    marginHorizontal: 15,
    opacity: 0.4,
  },
  humidity: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    opacity: 0.4,
  },
});

export default AnotherTemp;
