import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const BottomTabMenu = (props) => {
  return (
    <View style={styles.container}>
      {/* bottom dynamic island icons here everything here */}
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Home")}
        style={styles.iconbody}
      >
        <Image
          source={require("../assets/home.png")}
          style={{ height: "60%", width: "60%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("SearchPage")}
        style={styles.iconbody}
      >
        <Image
          source={require("../assets/search.png")}
          style={{ height: "60%", width: "60%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => props?.navigation?.navigate("Createpage")}
        style={[
          styles.iconbody,
          {
            backgroundColor: "#008080",
            borderRadius: 100,
            height: hp("6%"),
            width: hp("6%"),
          },
        ]}
      >
        <Image
          source={require("../assets/plus.png")}
          style={{ height: "40%", width: "40%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("DestiAIplaner")}
        style={styles.iconbody}
      >
        <Image
          source={require("../assets/question.png")}
          style={{ height: "60%", width: "60%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Profile")}
        style={styles.iconbody}
      >
        <Image
          source={require("../assets/user.png")}
          style={{ height: "60%", width: "60%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("9%"),
    width: wp("90%"),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#D9D9D9",
    position: "absolute",
    bottom: 10,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  iconbody: {
    height: hp("4%"),
    width: hp("4%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(BottomTabMenu);
