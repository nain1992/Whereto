import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Chatheader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconbody}>
        <Image
          source={require("../../../assets/searchwhite.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <TextInput
        placeholder={props?.placeholder}
        placeholderTextColor={"#fff"}
        multiline={true}
        style={styles.inputbody}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    width: wp("90%"),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: hp("2%"),
  },
  iconbody: {
    height: hp("2%"),
    width: hp("2%"),
    overflow: "hidden",
    marginRight: 5,
  },
  inputbody: {
    width: "90%",
    fontFamily: "RM",
    fontSize: rf(11),
    color: "#008080",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Chatheader);
