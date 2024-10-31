import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ActivityIndicator,
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
import { SignUp } from "../../state-management/actions/auth/auth";

const Signupwithemail = (props) => {
  const [eyeicon, setEyeicon] = useState(true);
  const [showpassword, setShowpassword] = useState(true);
  const [confirmeyepassword, setConfirmeyepassword] = useState(true);
  const [confirmpassword, setConfirmpassword] = useState(true);
  const [email, setEmail] = useState("");
  const [createpassword, setCreatepassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");
  const [loading, setLoading] = useState(false);
  let iconColor = "#565656";

  // const _HandleEmailSignup = () => {
  //   if (email === null && createpassword === null && passwordconfirm === null) {
  //     props?.SignUp(form, setLoading);
  //     console.log(form);
  //   } else {
  //     alert("Provide Valid Email & Password");
  //   }
  //   let form = { email, createpassword, passwordconfirm };
  // };
  const _HandleEmailSignup = () => {
    if (email && createpassword && passwordconfirm) {
      if (createpassword !== passwordconfirm) {
        alert("Passwords do not match");
        return;
      }

      setLoading(true);
      let form = { email, password: createpassword }; // Create form with appropriate data
      props?.SignUp(form, setLoading);
    } else {
      alert("Please provide a valid email and password.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "dark"}
        backgroundColor={Platform.OS === "ios" ? "#fff" : "#222"}
      />
      <KeyboardAvoidingScrollView>
        {/* header component */}
        <GeneralHeader navigation={props?.navigation} />
        <DisplayPictures
          // pictures of display here component
          text
          image1={require("../../assets/Rectangle1.png")}
          image2={require("../../assets/Rectangle2.png")}
          image3={require("../../assets/Rectangle3.png")}
        />
        <Text style={styles.joinustext}>Join Us</Text>
        {/* fields components */}
        <Fields
          lable={"Your Email*"}
          placeholder={"Enter Email Address"}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <Fields
          lable={"Create Password*"}
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
        <Fields
          lable={"Confirm Password*"}
          placeholder={"Enter Password"}
          value={passwordconfirm}
          onChangeText={(val) => setPasswordconfirm(val)}
          icon={
            confirmeyepassword ? (
              <Feather name="eye-off" size={hp("2%")} color={iconColor} />
            ) : (
              <Feather name="eye" size={hp("2%")} color={iconColor} />
            )
          }
          secureTextEntry={confirmpassword ? true : false}
          onPress={() => {
            setConfirmeyepassword(!confirmeyepassword);
            setConfirmpassword(!confirmpassword);
          }}
        />
        {/* sign up btn component */}
        <CommonButton
          onPress={_HandleEmailSignup} // No need to pass form here
          width={wp("50%")}
          ButtonTitle={
            loading ? (
              <ActivityIndicator size={"small"} color={"#222"} />
            ) : (
              "Signup"
            )
          }
        />

        <Text style={styles.bysinguptext}>
          By signing in, you agree to our Terms of Service and Privacy{"\n"}
          Policy
        </Text>
        {/* bottom text code */}
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
    fontSize: rf(12),
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
export default connect(mapStateToProps, { SignUp })(Signupwithemail);
