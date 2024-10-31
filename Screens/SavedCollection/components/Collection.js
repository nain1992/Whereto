import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Collection = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={props?.image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.textall}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  imagebody: {
    height: hp("20%"),
    width: wp("30%"),
    borderRadius: 10,
    overflow: "hidden",
  },
  textall: {
    fontFamily: "RM",
    fontSize: rf(10),
    color: "#565656",
    marginTop: 5,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Collection);
