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

const AIPlannerfields = (props) => {
  //   const data = props?.route?.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titletext}>{props?.title}</Text>
      <View style={styles.fieldbody}>
        <TextInput {...props} style={styles.inputstyles} />
        <View style={styles.iconbody}>
          <Image
            source={props?.image2}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5%"),
  },
  fieldbody: {
    height: hp("6%"),
    width: wp("90%"),
    borderRadius: 100,
    backgroundColor: "#F5F5F5",
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
export default connect(mapStateToProps)(AIPlannerfields);
