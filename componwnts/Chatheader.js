import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const Chatheader = (props) => {
  return (
    <View style={styles.container}>
      {/* header code mostly used as header component for several screens */}
      <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
        <Ionicons name="chevron-back" size={hp("3%")} color="#565656" />
      </TouchableOpacity>
      <View style={styles.headerwrapper}>
        <Text style={styles.titletext}>{props?.title}</Text>
      </View>
      <TouchableOpacity style={styles.iconbody}>
        <Image
          source={require("../assets/2.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("9%"),
    width: wp("100%"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#B0B0B0",
  },
  headerwrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titletext: {
    fontFamily: "RB",
    fontSize: rf(16),
    color: "#565656",
  },
  iconbody: {
    height: hp("2.5%"),
    width: hp("2.5%"),
    overflow: "hidden",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Chatheader);
