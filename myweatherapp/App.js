import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import LocationTemp from "./components/LocationTemp";
import AnotherTemp from "./components/AnotherTemp";
import TempByHour from "./components/TempByHour";
import WeeklyTempModal from "./components/WeeklyTempModal";
import SunMoon from "./components/SunMoon";

const API_KEY = ;
const GOOGLE_KEY = ;
const MOONDAY_KEY = ;
export default function App() {
  const [street, setStreet] = useState("Loading...");
  const [current, setCurrent] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [moonday, setMoonday] = useState(0);
  const [nowTime, setNowTime] = useState();

  const getDay = () => {
    const date = new Date(current.dt * 1000);
    const now_time = date.getHours();
    setNowTime(now_time);

    const year = date.getFullYear(date).toString();
    const month = (date.getMonth(date) + 1).toString();
    const day = date.getDate(date).toString();
    return [year, month, day];
  };

  const getAPI = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      //위치 동의 거부시!
    }

    // const {
    //   coords: { latitude, longitude },
    // } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    const latitude = 37.33627653569067;
    const longitude = 127.92610590132443;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric&lang=kr`
    );
    const json = await response.json();
    setCurrent(json.current);
    setHourly(json.hourly);
    setDaily(json.daily);

    // const response_map = await fetch(
    //   `https://maps.google.co.kr/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_KEY}`
    // );
    // const json_map = await response_map.json();

    // setStreet(json_map.results[0].address_components[1].long_name);

    setStreet("원주");

    const dayArray = getDay();

    // const response_moon = await fetch(
    //   `http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?solYear=${dayArray[0]}&solMonth=${dayArray[1]}&solDay=${dayArray[2]}&ServiceKey=${MOONDAY_KEY}`
    // );

    var xhr = new XMLHttpRequest();
    var url =
      "http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo"; /*URL*/
    var queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      MOONDAY_KEY; /*Service Key*/
    queryParams +=
      "&" +
      encodeURIComponent("solYear") +
      "=" +
      encodeURIComponent(dayArray[0]); /**/
    queryParams +=
      "&" +
      encodeURIComponent("solMonth") +
      "=" +
      encodeURIComponent(dayArray[1]); /**/
    queryParams +=
      "&" +
      encodeURIComponent("solDay") +
      "=" +
      encodeURIComponent(dayArray[2]); /**/
    xhr.open("GET", url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        console.log(
          "Status: " +
            this.status +
            "nHeaders: " +
            JSON.stringify(this.getAllResponseHeaders()) +
            "nBody: " +
            this.responseText
        );
      }
    };

    xhr.send("");
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <View style={styles.container}>
      {current.length === 0 ? (
        <View style={styles.loadingBox}>
          <ActivityIndicator
            color="black"
            style={{ marginTop: 10 }}
            size="large"
          />
        </View>
      ) : (
        <View style={styles.wrapper}>
          <View style={styles.sunmoon}>
            {/* <SunMoon current={current} moonday={moonday} nowTime={nowTime} /> */}
          </View>
          <View style={styles.locationTemp}>
            <LocationTemp current={current} street={street} />
          </View>
          <View style={styles.anotherTemp}>
            <AnotherTemp current={current} />
          </View>
          <View style={styles.tempByHour}>
            <TempByHour hourly={hourly} />
          </View>
          <View style={styles.weeklyTemp}>
            <WeeklyTempModal daily={daily} />
          </View>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  loadingBox: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  sunmoon: {
    flex: 2,
    borderWidth: 2,
    borderColor: "black",
  },
  locationTemp: {
    flex: 3,
    borderWidth: 2,
    borderColor: "red",
  },
  anotherTemp: {
    flex: 2.5,
    borderWidth: 2,
    borderColor: "black",
  },
  tempByHour: {
    flex: 3,
    borderWidth: 2,
    borderColor: "red",
  },
  weeklyTemp: {
    flex: 0.5,
    borderWidth: 2,
    borderColor: "black",
  },
});
