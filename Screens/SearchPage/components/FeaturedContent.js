import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const FeaturedContent = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={styles.parent}>
      <ImageBackground source={item?.image} style={styles.contentpicture}>
        <Text style={styles.nametext}>{item?.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  contentpicture: {
    height: hp("18%"),
    width: wp("23%"),
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  nametext: {
    fontFamily: "RBB",
    fontSize: rf(12),
    color: "#fff",
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(FeaturedContent);
