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
import { ImageBackground } from "react-native";

const Planner = (props) => {
  //   const data = props?.route?.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/11.png")}
        style={styles.imagebody}
      >
        <TouchableOpacity style={styles.deletebtnbody}>
          <Image
            source={require("../../../assets/d1.png")}
            style={{ height: "40%", width: "40%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{ flex: 1, justifyContent: "space-around", padding: 10 }}>
        <Text style={styles.name}>Cafe Delhi Heights</Text>
        <Text style={styles.location}>New Delhi</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.iconbody}>
            <Image
              source={require("../../../assets/event3.png")}
              style={{ height: "90%", width: "90%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.location}>2</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.iconbody}>
            <Image
              source={require("../../../assets/event2.png")}
              style={{ height: "90%", width: "90%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.location}>86</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.iconbody}>
            <Image
              source={require("../../../assets/event1.png")}
              style={{ height: "90%", width: "90%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.location}>11:00 Am</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("32%"),
    width: wp("40%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginRight: 10,
    paddingTop: 8,
  },
  imagebody: {
    height: hp("15%"),
    width: wp("38%"),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 5,
    alignSelf: "center",
  },
  deletebtnbody: {
    height: hp("5%"),
    width: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#008080",
  },
  name: {
    fontFamily: "RBB",
    fontSize: rf(12),
    color: "#008080",
    marginVertical: 3,
  },
  iconbody: {
    height: 12,
    width: 12,
    overflow: "hidden",
    marginRight: 10,
  },
  location: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Planner);
