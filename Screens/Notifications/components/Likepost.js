import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const Likepost = (props) => {
  //   const data = props?.route?.params;

  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={props?.image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.nametext}>{props?.name}</Text>
        <Text style={styles.activitytext}>{props?.time}</Text>
      </View>
      {props?.postimage ? (
        <View style={styles.imagebody1}>
          <Image
            source={props?.image1}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View style={styles.btnwrapper}>
          <TouchableOpacity style={styles.nobtnbody}>
            <Text style={styles.btntext}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addbtn}>
            <Text style={styles.adbtntext}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    marginVertical: 8,
  },
  imagebody: {
    height: hp("5%"),
    width: hp("5%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#008080",
    overflow: "hidden",
    marginRight: 10,
  },
  nametext: {
    fontFamily: "RM",
    fontSize: rf(12),
    color: "#565656",
  },
  activitytext: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  imagebody1: {
    height: hp("6%"),
    width: wp("8%"),
    overflow: "hidden",
    marginRight: 10,
  },
  btnwrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  nobtnbody: {
    height: hp("4%"),
    width: wp("15%"),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#B0B0B0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  btntext: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  addbtn: {
    height: hp("4%"),
    width: wp("15%"),
    borderRadius: 5,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
  },
  adbtntext: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Likepost);
