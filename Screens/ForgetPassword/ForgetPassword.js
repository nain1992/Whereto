import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import GeneralHeader from "../../componwnts/GeneralHeader";
import Fields from "../../componwnts/Fields";
import CommonButton from "../../componwnts/CommonButton";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

const ForgetPassword = (props) => {
  const [email, setEmail] = useState("");

  const _HandleCode = () => {
    if (email != "") {
      props?.navigation?.navigate("GetCode");
    } else {
      alert("Provide Valid Email");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* status bar */}
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "dark"}
        backgroundColor={Platform.OS === "ios" ? "#fff" : "#222"}
      />
      {/* ends here */}
      <KeyboardAvoidingScrollView>
        {/* header */}
        <GeneralHeader navigation={props?.navigation} />
        <View style={styles.framewrapper}>
          <Image
            source={require("../../assets/undraw_personal_email.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.joinustext}>
          Please enter your email address to{"\n"}receive a verification code.
        </Text>
        {/* main field here */}
        <Fields
          lable={"Your Email*"}
          placeholder={"Enter Email Address"}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />

        {/* btn here */}
        <CommonButton
          ButtonTitle={"Send Code"}
          onPress={_HandleCode}
          width={wp("90%")}
          marginVertical={hp("3%")}
        />
        <Text style={styles.bysinguptext}>
          By logging in, you agree to our Terms of Service and Privacy{"\n"}
          Policy
        </Text>
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
    fontSize: rf(12),
    color: "#565656",
    textAlign: "center",
    marginVertical: hp("3%"),
  },
  framewrapper: {
    height: hp("35%"),
    width: wp("90%"),
    alignSelf: "center",
    marginVertical: hp("2%"),
  },
  bysinguptext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#B0B0B0",
    textAlign: "center",
    marginVertical: hp("3%"),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(ForgetPassword);
