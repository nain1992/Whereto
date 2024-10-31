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
import Fields from "../../componwnts/Fields";
import { Feather } from "@expo/vector-icons";
import CommonButton from "../../componwnts/CommonButton";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import SocialButtons from "./components/SocialButtons";

const Login = (props) => {
  let iconColor = "#565656";
  const [eyeicon, setEyeicon] = useState(true);
  const [showpassword, setShowpassword] = useState(true);
  const [email, setEmail] = useState("");
  const [createpassword, setCreatepassword] = useState("");

  const _HandleLogin = () => {
    // if (email === "muthana@gmail.com" && createpassword === "muthana123") {
    //   props?.navigation?.navigate("Home");
    // } else {
    //   alert("Provide Valid Email & Password");
    // }
    props?.navigation?.navigate("Home");
  };

  const _HandlePress = () => {
    alert("Coming Soon!");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "dark"}
        backgroundColor={Platform.OS === "ios" ? "#fff" : "#222"}
      />
      <KeyboardAvoidingScrollView>
        {/* header here */}
        <GeneralHeader navigation={props?.navigation} />
        {/* main displayed pictures component */}
        <DisplayPictures
          image1={require("../../assets/Rectangle4.png")}
          image2={require("../../assets/Rectangle5.png")}
          image3={require("../../assets/Rectangle6.png")}
        />
        <Text style={styles.joinustext}>Join Us</Text>
        {/* main fields to enter info here */}
        <Fields
          lable={"Your Email*"}
          placeholder={"Enter Email Address"}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <Fields
          lable={"Password*"}
          value={createpassword}
          onChangeText={(val) => setCreatepassword(val)}
          placeholder={"Enter Password"}
          icon={
            eyeicon ? (
              <Feather name="eye-off" size={hp("2%")} color={iconColor} />
            ) : (
              <Feather name="eye" size={hp("2%")} color={iconColor} />
            )
          }
          secureTextEntry={showpassword ? true : false}
          onPress={() => {
            setEyeicon(!eyeicon);
            setShowpassword(!showpassword);
          }}
        />
        <Text
          onPress={() => props?.navigation?.navigate("ForgetPassword")}
          style={styles.forgottext}
        >
          Forgot Password ?
        </Text>
        {/* login btn component */}
        <CommonButton
          ButtonTitle={"Login"}
          onPress={_HandleLogin}
          width={wp("50%")}
        />

        <Text style={styles.bysinguptext}>Or Use the Following</Text>
        {/* social btn component */}
        <SocialButtons onPress={_HandlePress} />
        {/* text in lower part of screen code here */}

        <View style={styles.bottomtextwrapper}>
          <Text style={styles.logintext}>Don't have an account? </Text>
          <Text
            onPress={() => props?.navigation?.navigate("Signupwithemail")}
            style={[
              styles.logintext,
              {
                color: "#565656",
              },
            ]}
          >
            SignUp
          </Text>
        </View>
        {/* ends here */}
      </KeyboardAvoidingScrollView>
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
    justifyContent: "center",
    alignItems: "flex-end",
    height: hp("5%"),
  },
  logintext: {
    fontFamily: "RB",
    fontSize: rf(12),
    color: "#B0B0B0",
  },
  forgottext: {
    fontFamily: "RR",
    fontSize: rf(12),
    color: "#B0B0B0",
    textAlign: "right",
    paddingRight: wp("5%"),
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Login);
