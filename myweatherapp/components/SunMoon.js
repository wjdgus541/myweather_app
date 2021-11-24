import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Sun from "./Sun";
import Moon from "./Moon";

const SunMoon = ({ current, moonday, nowTime }) => {
  console.log(moonday);
  return (
    <View>
      {moonday === 0 ? (
        <View>
          <Text>loading2</Text>
        </View>
      ) : (
        <View>
          {current.dt < current.sunset && current.dt > current.sunrise ? (
            <Sun nowTime={nowTime} />
          ) : (
            <View>
              <Moon nowTime={nowTime} moonday={moonday} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default SunMoon;
