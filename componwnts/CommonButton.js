import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const CommonButton = (props) => {
  return (
    <TouchableOpacity
      // general btn code used in all app
      onPress={props?.onPress}
      style={[
        styles.container,
        {
          width: props?.width,
          marginVertical: props?.marginVertical,
        },
      ]}
    >
      <Text style={styles.Title}>{props?.ButtonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: wp("50%"),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#008080",
    borderRadius: 100,
  },
  Title: {
    fontFamily: "RBB",
    fontSize: rf(14),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(CommonButton);
