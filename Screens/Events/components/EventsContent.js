import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const EventsContent = (props) => {
  const data = props?.route?.params;
  const { item } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={require("../../../assets/eventpic.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.nametext}>Cafe Delhi Heights</Text>
      <Text style={styles.locationtext}>New Delhi</Text>
      <View style={styles.iconwrapper}>
        <View style={styles.iconbody}>
          <Image
            source={require("../../../assets/event3.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.locationtext}>2</Text>
      </View>
      <View style={styles.iconwrapper}>
        <View style={styles.iconbody}>
          <Image
            source={require("../../../assets/event2.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.locationtext}>86</Text>
      </View>
      <View style={styles.iconwrapper}>
        <View style={styles.iconbody}>
          <Image
            source={require("../../../assets/event1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.locationtext}>11:00 Am</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("32%"),
    width: wp("43%"),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  imagebody: {
    height: "60%",
    width: "100%",
    overflow: "hidden",
    alignSelf: "center",
    borderRadius: 5,
  },
  iconwrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconbody: {
    height: 10,
    width: 10,
    overflow: "hidden",
    marginRight: 5,
  },
  nametext: {
    fontFamily: "RB",
    fontSize: rf(12),
    color: "#008080",
    marginBottom: 3,
  },
  locationtext: {
    fontFamily: "RM",
    fontSize: rf(9),
    color: "#B0B0B0",
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(EventsContent);
