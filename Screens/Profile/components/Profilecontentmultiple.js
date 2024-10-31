import React, { useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Profilecontentmultiple = (props) => {
  //   const data = props?.route?.params;

  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
      <View style={styles.rowupper}>
        <View style={styles.imagebody}>
          <Image
            source={props?.image}
            style={{ height: "100%", width: "100%" }}
            // resizeMode="contain"
          />
        </View>
        <View style={styles.imagebody}>
          <Image
            source={require("../../../assets/c1.png")}
            style={{ height: "100%", width: "100%" }}
            // resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.rowupper}>
        <View style={styles.imagebody}>
          <Image
            source={require("../../../assets/20.png")}
            style={{ height: "100%", width: "100%" }}
            // resizeMode="contain"
          />
        </View>
        <View style={styles.imagebody}>
          <Image
            source={require("../../../assets/20.png")}
            style={{ height: "100%", width: "100%" }}
            // resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.rowupper}>
        <View style={styles.imagebody}>
          <Image
            source={require("../../../assets/c1.png")}
            style={{ height: "100%", width: "100%" }}
            // resizeMode="contain"
          />
        </View>
        <View style={styles.imagebody}>
          <Image
            source={require("../../../assets/Food.png")}
            style={{ height: "100%", width: "100%" }}
            // resizeMode="contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("25%"),
    width: wp("28%"),
    borderRadius: 10,
    overflow: "hidden",
    margin: 3,
  },
  rowupper: {
    height: "33%",
    width: "100%",
    flexDirection: "row",
  },
  imagebody: {
    height: "100%",
    width: "50%",
    overflow: "hidden",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Profilecontentmultiple);
