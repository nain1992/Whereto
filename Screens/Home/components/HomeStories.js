import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const HomeStories = (props) => {
  const { item } = props;
  const data = props?.route?.params;
  return (
    <View>
      <TouchableOpacity onPress={props?.onPress} style={styles.radiusView}>
        <View style={styles.container}>
          <Image
            source={item?.image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.storyname}>{item?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  radiusView: {
    height: hp("8%"),
    width: hp("8%"),
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },

  container: {
    height: hp("7%"),
    width: hp("7%"),
    borderRadius: 100,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  storyname: {
    fontFamily: "RR",
    fontSize: rf(10),
    color: "#000000",
    textAlign: "center",
    marginTop: 5,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(HomeStories);
