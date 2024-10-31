import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Fields = (props) => {
  let fieldTextcolor = "#B0B0B0";
  return (
    <View style={styles.container}>
      {/* general field component used all over app */}
      <Text style={styles.labletext}>{props?.lable}</Text>
      <View style={styles.fieldbody}>
        <TextInput
          style={styles.placeholderstyles}
          placeholder={props?.placeholder}
          placeholderTextColor={fieldTextcolor}
          secureTextEntry={props?.secureTextEntry}
          onChangeText={props?.onChangeText}
          value={props?.value}
        />
        <TouchableOpacity onPress={props?.onPress}>
          {props?.icon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5%"),
    marginBottom: hp("1.5%"),
  },
  labletext: {
    fontFamily: "RM",
    fontSize: rf(12),
    color: "#565656",
    marginBottom: 5,
  },
  fieldbody: {
    height: hp("6%"),
    width: wp("90%"),
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  placeholderstyles: {
    height: "100%",
    width: "90%",
    fontFamily: "RR",
    fontSize: rf(11),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Fields);
