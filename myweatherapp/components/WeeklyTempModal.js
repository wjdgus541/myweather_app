import React from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  PanResponder,
} from "react-native";

import { useState } from "react/cjs/react.development";
import { Entypo, AntDesign } from "@expo/vector-icons";
import WeeklyTemp from "./WeeklyTemp";

const WeeklyTempModal = ({ daily }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={(e) => console.log(e)}
      >
        <View style={styles.modalViewBox}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.buttonClose}
            >
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
            <WeeklyTemp daily={daily} />
          </View>
        </View>
      </Modal>

      <Pressable
        style={styles.buttonOpen}
        onPress={() => setModalVisible(true)}
      >
        <Entypo name="chevron-up" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalViewBox: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "flex-end",
  },
  modalView: {
    height: 250,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
  },
  buttonOpen: {
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
  buttonClose: {
    height: 50,
  },
});

export default WeeklyTempModal;
