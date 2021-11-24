import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components";

const Moon = ({ nowTime, moonday }) => {
  const MoonData = () => {
    if (moonday === 1) {
      return {
        shape: "moon-new",
        location: 4,
      };
    } else if (moonday >= 2 && moonday <= 6) {
      return {
        shape: "moon-waxing-crescent",
        location: 3,
      };
    } else if (moonday >= 7 && moonday <= 11) {
      return {
        shape: "moon-first-quarter",
        location: 2,
      };
    } else if (moonday >= 12 && moonday <= 14) {
      return {
        shape: "moon-waxing-gibbous",
        location: 1,
      };
    } else if (moonday >= 15 && moonday <= 16) {
      return {
        shape: "moon-full",
        location: 0,
      };
    } else if (moonday >= 17 && moonday <= 20) {
      return {
        shape: "moon-waning-gibbous",
        location: -1,
      };
    } else if (moonday >= 21 && moonday <= 24) {
      return {
        shape: "moon-last-quarter",
        location: -2,
      };
    } else if (moonday >= 25 && moonday <= 30) {
      return {
        shape: "moon-waning-crescent",
        location: -3,
      };
    }
  };

  const Moon = styled(MaterialCommunityIcons)`
    font-size: 70px;
    color: black;
  `;

  const NowMoon = styled.View`
    width: 70px;
    height: 70px;
    ${(props) => {
      if (props.now_location === 1) {
        return css`
          top: 85%;
          left: 2%;
          transform: rotate(-68deg);
        `;
      } else if (props.now_location === 2) {
        return css`
          top: 15%;
          left: 15%;
          transform: rotate(-45deg);
        `;
      } else if (props.now_location === 3) {
        return css`
          top: 5%;
          left: 38%;
        `;
      } else if (props.now_location === 4) {
        return css`
          top: 15%;
          left: 60%;
          transform: rotate(45deg);
        `;
      } else if (props.now_location === 5) {
        return css`
          top: 70%;
          left: 77%;
          transform: rotate(65deg);
        `;
      } else {
        return css`
          display: none;
        `;
      }
    }};
  `;

  const timeCalc = () => {
    if (nowTime <= 23 && nowTime >= 16) {
      return (nowTime + 1) / 3 - 5;
    } else {
      return (nowTime + 1) / 3 + 3;
    }
  };

  const moondata = MoonData();
  const time_number = timeCalc();
  const now_location = Math.floor(time_number + moondata.location);

  return (
    <View>
      {moonday ? (
        <NowMoon now_location={now_location}>
          <Moon name={moondata.shape} />
        </NowMoon>
      ) : (
        <View>
          {console.log(moonday)}
          <Text>loading1</Text>
        </View>
      )}
    </View>
  );
};

export default Moon;
