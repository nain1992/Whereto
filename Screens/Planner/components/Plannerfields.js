import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Planner = (props) => {
  //   const data = props?.route?.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titletext}>{props?.title}</Text>
      <View style={styles.fieldbody}>
        <Pressable onPress={props?.onAddPress} style={styles.iconbody}>
          <Image
            source={props?.image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </Pressable>
        <TextInput {...props} style={styles.inputstyles} />
        <Pressable onPress={props?.onMinusPress} style={styles.iconbody}>
          <Image
            source={props?.image2}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5%"),
  },
  fieldbody: {
    height: hp("5%"),
    width: wp("90%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#008080",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  titletext: {
    fontFamily: "RM",
    fontSize: rf(12),
    color: "#565656",
    marginBottom: 8,
  },
  iconbody: {
    height: 15,
    width: 15,
    overflow: "hidden",
    marginRight: 8,
  },
  inputstyles: {
    width: "85%",
    fontFamily: "RM",
    fontSize: rf(11),
    color: "#008080",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Planner);
