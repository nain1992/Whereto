import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const RecentSearchedPeople = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerwrapper}>
        <View style={styles.iconbody}>
          <Image
            source={require("../../../assets/trendingprofile.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.nametext}>Hong Kong</Text>
      </View>
      <TouchableOpacity>
        <AntDesign name="close" size={hp("2%")} color="#565656" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
  },
  innerwrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  iconbody: {
    height: hp("4%"),
    width: hp("4%"),
    overflow: "hidden",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#008080",
    borderRadius: 100,
  },
  nametext: {
    fontFamily: "RR",
    fontSize: rf(12),
    color: "#565656",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(RecentSearchedPeople);
