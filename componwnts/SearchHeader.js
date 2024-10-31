import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const SearchHeader = (props) => {
  return (
    // search screens headeer component used in search screens and also in others where same header is needed
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
        <Ionicons name="chevron-back" size={hp("3%")} color="#565656" />
      </TouchableOpacity> */}
      <View style={styles.logoparent}>
        <View style={styles.logowrapper}>
          <Image
            source={require("../assets/headerLogo.png")}
            style={{ height: "80%", width: "80%" }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp("10%"),
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  logowrapper: {
    width: wp("50%"),
    height: hp("8%"),
    justifyContent: "center",
    alignItems: "center",
  },
  logoparent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(SearchHeader);
