import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";

const SocialButtons = (props) => {
  let socialbuttonsicon = [
    require("../../../assets/Google.png"),
    require("../../../assets/Facebook.png"),
    require("../../../assets/Apple.png"),
  ];
  return (
    <View style={styles.container}>
      {socialbuttonsicon?.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={props?.onPress}
            key={index}
            style={styles.iconsbody}
          >
            <Image
              source={item}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("50%"),
    alignSelf: "center",
  },
  iconsbody: {
    height: hp("5%"),
    width: hp("5%"),
    overflow: "hidden",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(SocialButtons);
