import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Header = (props) => {
  //   const data = props?.route?.params;

  return (
    <View style={styles.container}>
      <View style={styles.profilebody}>
        <Image
          source={require("../../../assets/user1.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={styles.nameuser}>CynthiaBakerr</Text>
      </View>
      <TouchableOpacity onPress={props?.onMsgpress} style={styles.iconbody}>
        <Image
          source={require("../../../assets/msg1.png")}
          style={{ height: "40%", width: "40%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconbody}>
        <Image
          source={require("../../../assets/p2.png")}
          style={{ height: "40%", width: "40%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    height: hp("12%"),
  },
  profilebody: {
    height: hp("7%"),
    width: hp("7%"),
    overflow: "hidden",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#008080",
  },
  nameuser: {
    color: "#161618",
    fontFamily: "RBB",
    fontSize: rf(14),
  },
  iconbody: {
    height: hp("5%"),
    width: hp("5%"),
    overflow: "hidden",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Header);
