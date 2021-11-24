import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import moment from "moment";
import "moment/locale/ko";

const WeeklyTemp = ({ daily }) => {
  const week = daily.map((day, index) => {
    if (index === 0) {
      return "오늘";
    } else if (index < 6) {
      return moment(new Date(day.dt * 1000))
        .format("dddd")
        .substring(0, 1);
    } else null;
  });
  const max_temp = daily.map((day, index) => {
    if (index < 6) {
      return Math.floor(day.temp.max);
    } else null;
  });
  const min_temp = daily.map((day, index) => {
    if (index < 6) {
      return Math.floor(day.temp.min);
    } else null;
  });
  let days = [];
  for (let i = 0; i < 6; i++) {
    days.push({
      week: week[i],
      max_temp: max_temp[i],
      min_temp: min_temp[i],
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.day_wrapper}>
        {days.map((day, index) => (
          <View style={styles.day} key={day.week}>
            <Text>{day.week}</Text>
            <Text>{day.max_temp}</Text>
            <Text>{day.min_temp}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  day_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    width: Dimensions.get("window").width,
    marginVertical: 10,
  },
  day: {
    borderWidth: 2,
    flex: 1,
  },
});

export default WeeklyTemp;
