import React from "react";
import { Text, View, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components";

const Sun = ({ nowTime }) => {
  const view_width = Dimensions.get("window").width;

  const Container = styled.View`
    height: 100%;
    background-color: #f1d746;
  `;

  const Location = styled.View`
    width: 60px;
    height: 60px;
    ${(props) => {
      if (props.nowTime <= 8) {
        return css`
          top: 50%;
          left: 2%;
        `;
      } else if (props.nowTime >= 9 && props.nowTime <= 10) {
        return css`
          top: 15%;
          left: 15%;
        `;
      } else if (props.nowTime >= 11 && props.nowTime <= 13) {
        return css`
          top: 5%;
          left: 41%;
        `;
      } else if (props.nowTime >= 14 && props.nowTime <= 15) {
        return css`
          top: 15%;
          left: 67%;
        `;
      } else {
        return css`
          top: 50%;
          left: 80%;
        `;
      }
    }};
  `;

  return (
    <Container>
      <Location nowTime={nowTime}>
        {console.log(moonday)}
        <Sun name="white-balance-sunny" />
      </Location>
    </Container>
  );
};

export default Sun;
