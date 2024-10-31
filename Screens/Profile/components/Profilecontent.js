import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Profile = (props) => {
  //   const data = props?.route?.params;

  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
      <Image
        source={props?.image}
        style={{ height: "100%", width: "100%" }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("25%"),
    width: wp("28%"),
    borderRadius: 10,
    overflow: "hidden",
    margin: 3,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Profile);
