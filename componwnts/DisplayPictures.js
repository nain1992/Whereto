import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const DisplayPictures = (props) => {
  return (
    <View>
      {/* display picture component code for login and signups lable type pictures */}
      <View style={styles.container}>
        <View style={styles.picturebody}>
          <Image
            source={props?.image1}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View
          style={[
            styles.picturebody,
            {
              width: hp("22%"),
            },
          ]}
        >
          <Image
            source={props?.image2}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.picturebody}>
          <Image
            source={props?.image3}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      {props?.text ? (
        <Text style={styles.Introtext}>
          Unlock a captivating platform for sharing travel memories & post
          pictures of your destinations.
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  picturebody: {
    height: hp("25%"),
    width: hp("11%"),
    borderRadius: 10,
    overflow: "hidden",
  },
  Introtext: {
    fontFamily: "RR",
    fontSize: rf(12),
    color: "#B0B0B0",
    paddingHorizontal: wp("5%"),
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(DisplayPictures);
