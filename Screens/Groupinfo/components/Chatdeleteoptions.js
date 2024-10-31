import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const Groupinfo = (props) => {
  //   const data = props?.route?.params;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titletext}>{props?.title}</Text>
      <View style={styles.innerview}>
        {props?.option ? (
          <Text style={styles.titletext}>{props?.optiontext}</Text>
        ) : null}

        <Ionicons name="chevron-forward" size={hp("2.5")} color="#D9D9D9" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    width: wp("90%"),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  titletext: {
    fontFamily: "RBB",
    fontSize: rf(11),
    color: "#B0B0B0",
  },
  innerview: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Groupinfo);
