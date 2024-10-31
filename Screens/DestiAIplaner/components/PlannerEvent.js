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

const PlannerEvent = (props) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
      <Text style={styles.exloretext}>{props?.title}</Text>
      <View style={styles.explorebody}>
        <Text style={styles.nowtext}>Explore now </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("18%"),
    width: hp("18%"),
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginRight: 5,
  },
  exloretext: {
    fontFamily: "RR",
    fontSize: rf(12),
    color: "#565656",
    textAlign: "center",
  },
  explorebody: {
    flexDirection: "row",
    alignItems: "center",
  },
  nowtext: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#008080",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(PlannerEvent);
