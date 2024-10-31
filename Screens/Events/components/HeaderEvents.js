import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const HeaderEvents = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
        <Ionicons name="chevron-back" size={hp("3%")} color="#565656" />
      </TouchableOpacity>
      <View style={styles.titlewrapper}>
        <Text style={styles.titletext}>{props?.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp("8%"),
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  titlewrapper: {
    flex: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },

  titletext: {
    fontFamily: "RBB",
    fontSize: rf(18),
    color: "#565656",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(HeaderEvents);
