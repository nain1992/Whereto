import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const AIheader = (props) => {
  return (
    // general AL screens header code used in AI screens mostly
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
    height: hp("9%"),
    width: wp("100%"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    backgroundColor: "#fff",
  },
  titlewrapper: {
    flex: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
  titletext: {
    fontFamily: "RBB",
    fontSize: rf(16),
    color: "#565656",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(AIheader);
