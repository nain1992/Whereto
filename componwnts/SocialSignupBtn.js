import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const SocialSignupBtn = (props) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
      {/* social signup btn component code */}
      <View
        style={[
          styles.iconbody,
          {
            marginRight: props?.marginRight,
          },
        ]}
      >
        <Image
          source={props?.image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.btntext}>{props?.btnTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#565656",
    height: hp("7%"),
    width: wp("90%"),
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  iconbody: {
    height: hp("3%"),
    width: hp("3%"),
    overflow: "hidden",
  },
  btntext: {
    fontFamily: "RB",
    fontSize: rf(12),
    color: "#B0B0B0",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(SocialSignupBtn);
