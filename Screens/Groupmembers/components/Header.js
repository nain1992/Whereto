import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
  //   const data = props?.route?.params;

  return (
    <View style={styles.container}>
      <View style={styles.contentwrapper}>
        <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
          <Ionicons name="chevron-back" size={hp("3%")} color="#565656" />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.headertext}>Group Info</Text>
        </View>
      </View>
      <View style={styles.imagebody}>
        <Image
          source={require("../../../assets/user1.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.groupname}>ALL ARE WONDERS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    alignSelf: "center",
    alignItems: "center",
  },
  contentwrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: hp("8%"),
  },
  imagebody: {
    height: hp("9%"),
    width: hp("9%"),
    overflow: "hidden",
    borderRadius: 100,
  },

  headertext: {
    fontFamily: "RBB",
    fontSize: rf(13),
    color: "#565656",
    marginRight: 15,
    marginVertical: 10,
  },
  groupname: {
    fontFamily: "RBB",
    fontSize: rf(13),
    color: "#565656",
    marginVertical: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Header);
