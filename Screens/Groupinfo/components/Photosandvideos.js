import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const Photosandvideos = (props) => {
  //   const data = props?.route?.params;

  return (
    <View style={styles.container}>
      <View style={styles.photobody}>
        <Image
          source={require("../../../assets/11.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.photobody}>
        <Image
          source={require("../../../assets/11.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.photobody}>
        <Image
          source={require("../../../assets/11.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    marginVertical: 10,
  },
  photobody: {
    height: hp("14%"),
    width: wp("40%"),
    borderRadius: 10,
    overflow: "hidden",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Photosandvideos);
