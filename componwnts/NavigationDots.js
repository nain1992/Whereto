import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const NavigationDots = (props) => {
  const [imgActive, setimgActive] = useState(0);

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <View style={styles.WrapDot}>
      {[1, 2].map((item, index) => (
        <View
          key={index}
          style={imgActive == index ? styles.dotActive : styles.dot}
        ></View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  WrapDot: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: hp("1%"),
    right: wp("38%"),
  },
  dotActive: {
    height: 8,
    width: 20,
    backgroundColor: "#f5a734",
    margin: 3,
    borderRadius: 10,
  },
  dot: {
    height: 8,
    width: 20,
    margin: 3,
    backgroundColor: "#b8b8b8",
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(NavigationDots);
