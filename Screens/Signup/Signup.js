import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import GeneralHeader from "../../componwnts/GeneralHeader";
import DisplayPictures from "../../componwnts/DisplayPictures";
import SocialSignupBtn from "../../componwnts/SocialSignupBtn";

const Signup = (props) => {
  const _HandleSocialButton = () => {
    alert("Coming Soon!");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "dark"}
        backgroundColor={Platform.OS === "ios" ? "#fff" : "#222"}
      />
      {/* header here */}
      <GeneralHeader navigation={props?.navigation} />
      {/* display pictures here */}
      <DisplayPictures
        text
        image1={require("../../assets/Rectangle1.png")}
        image2={require("../../assets/Rectangle2.png")}
        image3={require("../../assets/Rectangle3.png")}
      />
      <Text style={styles.joinustext}>Join Us</Text>
      {/* social btns here components */}
      <SocialSignupBtn
        marginRight={10}
        image={require("../../assets/Google.png")}
        btnTitle={"Sign Up with Google"}
        onPress={_HandleSocialButton}
      />
      <SocialSignupBtn
        marginRight={10}
        image={require("../../assets/Facebook.png")}
        btnTitle={"Sign Up with Facebook"}
        onPress={_HandleSocialButton}
      />
      <SocialSignupBtn
        marginRight={10}
        image={require("../../assets/Apple.png")}
        btnTitle={"Sign Up with Apple id"}
        onPress={_HandleSocialButton}
      />
      <SocialSignupBtn
        btnTitle={"Use phone/Email/Username"}
        onPress={() => props?.navigation?.navigate("Signupwithemail")}
      />
      {/* ends here */}
      <Text style={styles.bysinguptext}>
        By signing in, you agree to our Terms of Service and Privacy{"\n"}Policy
      </Text>
      {/* login btn code here */}
      <View style={styles.bottomtextwrapper}>
        <Text style={styles.logintext}>Already have an account ? </Text>
        <Text
          onPress={() => props?.navigation?.navigate("Login")}
          style={[
            styles.logintext,
            {
              color: "#565656",
            },
          ]}
        >
          Login
        </Text>
      </View>
      {/* ends here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  joinustext: {
    fontFamily: "RBB",
    fontSize: rf(18),
    color: "#000000",
    textAlign: "center",
    marginVertical: hp("3%"),
  },
  bysinguptext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#B0B0B0",
    textAlign: "center",
    marginVertical: hp("3%"),
  },
  bottomtextwrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logintext: {
    fontFamily: "RB",
    fontSize: rf(12),
    color: "#B0B0B0",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Signup);
