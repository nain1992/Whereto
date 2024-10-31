import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const DateFilter = (props) => {
  const { title, _HandleFilter, bydate } = props;

  return (
    <TouchableOpacity
      onPress={() => _HandleFilter(title)}
      style={styles.filterbox}
    >
      <Text
        style={[
          styles.filtertext,
          {
            color: title === bydate ? "#565656" : "#B0B0B0",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp("3%"),
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
  },
  filterbox: {
    minHeight: hp("4%"),
    minWidth: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginHorizontal: 4,
  },
  filtertext: {
    fontFamily: "RB",
    fontSize: rf(11),
    color: "#B0B0B0",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(DateFilter);
