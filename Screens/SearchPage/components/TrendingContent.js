import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";

const TrendingContent = (props) => {
  const { item } = props;

  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.parent}>
      <View style={styles.profilepicwrapper}>
        <View style={styles.profilepicbody}>
          <Image
            source={item?.profileimage}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.nametext}>{item?.profilename}</Text>
          <Text style={styles.lastnametext}>{item?.profilelastname}</Text>
        </View>
      </View>
      <ImageBackground source={item?.foodimage} style={styles.trendingimage}>
        <View style={styles.AEDWrapper}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="users" size={hp("1.5%")} color="#fff" />
            <Text
              style={[
                styles.aedtext,
                {
                  marginLeft: 5,
                },
              ]}
            >
              {item?.num}
            </Text>
          </View>
          <View style={styles.lineview}></View>
          <Text style={styles.aedtext}>{item?.aed}</Text>
          <View style={styles.lineview}></View>
          <Text style={styles.aedtext}>{item?.foodname}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: hp("28%"),
    width: wp("44%"),
    backgroundColor: "red",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B0B0B0",
    padding: 10,
    justifyContent: "space-between",
    margin: 5,
  },
  profilepicwrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilepicbody: {
    height: hp("4%"),
    width: hp("4%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#008080",
    overflow: "hidden",
    marginRight: 5,
  },
  nametext: {
    fontFamily: "RBB",
    fontSize: rf(10),
    color: "#0D0D0D",
  },
  lastnametext: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  trendingimage: {
    height: hp("20%"),
    width: wp("38%"),
    overflow: "hidden",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  AEDWrapper: {
    flexDirection: "row",
    height: hp("5%"),
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "rgba(0, 128, 128, 0.2)",
    marginBottom: 10,
    paddingHorizontal: 5,
    justifyContent: "space-around",
  },
  lineview: {
    height: "70%",
    width: 0,
    borderWidth: 1,
    borderColor: "#fff",
  },
  aedtext: {
    fontFamily: "RB",
    fontSize: rf(9),
    color: "#fff",
  },
  trendingwrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderStartColor: "red",
    height: hp("35%"),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(TrendingContent);
