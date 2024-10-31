import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Followbtn = (props) => {
  //   const data = props?.route?.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.followbtn}>
        <Text style={styles.followtext}>Follow</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props?.onPress} style={styles.followersbtn}>
        <View style={styles.iconbody}>
          <Image
            source={require("../../../assets/user1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View
          style={[
            styles.iconbody,
            {
              left: 20,
            },
          ]}
        >
          <Image
            source={require("../../../assets/storypicture.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View
          style={[
            styles.iconbody,
            {
              left: 40,
            },
          ]}
        >
          <Image
            source={require("../../../assets/trendingprofile.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.followertext}> 1000 Followers</Text>
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
    marginVertical: 8,
  },
  followbtn: {
    height: hp("5%"),
    width: wp("40%"),
    borderRadius: 100,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
  },
  followtext: {
    fontFamily: "RBB",
    fontSize: rf(12),
    color: "#fff",
  },
  followersbtn: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("40%"),
  },
  iconbody: {
    height: hp("3%"),
    width: hp("3%"),
    overflow: "hidden",
    borderRadius: 100,
    position: "absolute",
    left: 5,
  },
  followertext: {
    fontFamily: "RBB",
    fontSize: rf(10),
    color: "#161618",
    marginLeft: wp("17%"),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Followbtn);
