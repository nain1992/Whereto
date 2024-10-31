import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
const GeneralHeader = (props) => {
  return (
    <View style={styles.container}>
      {/* home screen header used in home type headers */}
      <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
        {props?.HomeHeader ? (
          <TouchableOpacity
            onPress={props?.onPresswallet}
            style={styles.iconwrapper}
          >
            <Image
              source={require("../assets/wallet.png")}
              style={{ height: "70%", width: "70%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <Ionicons name="chevron-back" size={hp("3%")} color="#565656" />
        )}
      </TouchableOpacity>
      <View style={styles.logowrapper}>
        <Image
          source={require("../assets/headerLogo.png")}
          style={{ height: "80%", width: "80%" }}
          resizeMode="contain"
        />
      </View>
      {props?.HomeHeaderBell ? (
        <View style={styles.belliconwrapper}>
          <TouchableOpacity
            onPress={props?.onBellPress}
            style={styles.iconwrapper}
          >
            <Image
              source={require("../assets/bell.png")}
              style={{ height: "70%", width: "70%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={props?.onPress} style={styles.iconwrapper}>
            <Image
              source={require("../assets/chat.png")}
              style={{ height: "70%", width: "70%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.iconwrapper}>
          <Image
            source={require("../assets/microphone.png")}
            style={{ height: "70%", width: "70%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
  },
  logowrapper: {
    width: "50%",
    height: hp("8%"),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp("5%"),
  },
  iconwrapper: {
    width: hp("4%"),
    height: hp("4%"),
    justifyContent: "center",
    alignItems: "center",
  },
  belliconwrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(GeneralHeader);
