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

const Onboarding = (props) => {
  const _handlePress = () => {
    props?.navigation?.navigate("Signup");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "dark"}
        backgroundColor={Platform.OS === "ios" ? "#fff" : "#222"}
      />
      {/* main logo code */}
      <View style={styles.logowrapper}>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      {/* logo ends here */}
      <Text style={styles.text}>
        With a seamless interface, it allows travelers to post images of the
        stunning places they explore, from hidden gems to iconic landmarks.
        Discover new destinations, gain insights from fellow adventurers, and
        fuel your wanderlust within a vibrant community.
      </Text>
      {/* btns starts here */}
      <View style={styles.btnwrapper}>
        <TouchableOpacity onPress={_handlePress} style={styles.JonusBtnbody}>
          <Text style={styles.btntext}>Join us </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_handlePress} style={styles.Loginbtnbody}>
          <Text
            style={[
              styles.btntext,
              {
                color: "#fff",
              },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {/* ends here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logowrapper: {
    height: hp("15%"),
    width: wp("90%"),
  },
  text: {
    fontFamily: "RR",
    fontSize: rf(13),
    color: "#565656",
    paddingHorizontal: wp("5%"),
    textAlign: "center",
  },
  btnwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
    marginVertical: hp("5%"),
    width: wp("100%"),
  },
  JonusBtnbody: {
    height: hp("6%"),
    width: wp("40%"),
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontFamily: "RBB",
    fontSize: rf(14),
    color: "#565656",
  },
  Loginbtnbody: {
    height: hp("6%"),
    width: wp("40%"),
    borderRadius: 100,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Onboarding);
