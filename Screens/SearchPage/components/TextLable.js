import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const TextLable = (props) => {
  return (
    <View style={styles.lableWrapper}>
      <View style={styles.innerbody}>
        <Text style={styles.labletext}>{props?.lable}</Text>
        <View style={styles.iconbody}>
          <Image
            source={props?.image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      {props?.ViewAllText ? (
        <TouchableOpacity onPress={props?.onPress}>
          <Text style={styles.labletext}>View all</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  lableWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
    marginVertical: 5,
  },
  innerbody: {
    flexDirection: "row",
    alignItems: "center",
  },
  labletext: {
    fontFamily: "RBB",
    fontSize: rf(11),
    color: "#B0B0B0",
  },
  iconbody: {
    height: hp("2%"),
    width: hp("2%"),
    overflow: "hidden",
    marginLeft: 5,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(TextLable);
