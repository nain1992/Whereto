import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      {/* general search bar component */}
      <TextInput
        style={styles.searchinput}
        {...props}
        placeholderTextColor={"#B0B0B0"}
      />
      <TouchableOpacity onPress={props?.onPress} style={styles.searchbtn}>
        <Feather name="search" size={hp("3%")} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: wp("90%"),
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    justifyContent: "space-between",
    marginTop: 10,
  },
  searchinput: {
    width: "80%",
    fontFamily: "RR",
    fontSize: rf(10),
    color: "#008080",
  },
  searchbtn: {
    height: hp("7%"),
    width: hp("7%"),
    borderRadius: 100,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(SearchBar);
