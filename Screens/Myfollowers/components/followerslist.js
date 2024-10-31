import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const followerslist = (props) => {
  const { item } = props;
  //   const data = props?.route?.params;
  return (
    <View style={styles.container1}>
      <TouchableOpacity style={styles.container}>
        <Image
          source={require("../../../assets/trendingprofile.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.iconbody}>
        <Image
          source={require("../../../assets/f1.png")}
          style={{ height: "40%", width: "40%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.storyname}>Alan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    height: hp("10%"),
    width: hp("10%"),
    marginBottom: 20,
  },
  container: {
    height: hp("8%"),
    width: hp("8%"),
    borderRadius: 100,
    overflow: "hidden",
    marginHorizontal: 10,
    borderColor: "#008080",
    borderWidth: 2,
  },
  storyname: {
    fontFamily: "RR",
    fontSize: rf(10),
    color: "#000000",
    textAlign: "center",
    marginTop: 10,
  },
  iconbody: {
    position: "absolute",
    height: 20,
    width: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008080",
    bottom: 8,
    right: 25,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(followerslist);
