import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const TempByHour = ({ hourly }) => {
  let data_arr = [];
  let label_arr = [];

  const hourCalc = (unix_time) => {
    const date = new Date(unix_time * 1000);
    return date.getHours();
  };

  hourly.map((hourly_data, index) => {
    if (index === 0) {
    } else if (index > 8) {
      return;
    } else {
      data_arr = data_arr.concat(Math.floor(hourly_data.temp));
      label_arr = label_arr.concat(hourCalc(hourly_data.dt) + "시");
    }
  });

  const chart_data = {
    labels: label_arr,
    datasets: [
      {
        data: data_arr,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <View style={styles.chart_box}>
        <LineChart
          data={chart_data}
          width={Dimensions.get("window").width - 40}
          height={160}
          withShadow={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withHorizontalLabels={false}
          fromZero={true}
          yAxisInterval={1} // optional, defaults to 1
          renderDotContent={({ x, y, index, indexData }) => (
            <View key={index}>
              <Text
                style={{
                  position: "absolute",
                  top: y - 25,
                  left: x - 10,
                  color: "white",
                }}
              >
                {Math.ceil(indexData)}
              </Text>
            </View>
          )}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chart_box: {
    backgroundColor: "black",
    paddingVertical: 10,
  },
});

export default TempByHour;
