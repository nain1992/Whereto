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
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Followerslist from "./components/followerslist";

const Myfollowers = (props) => {
  //   const data = props?.route?.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      {/* header here */}
      <View style={styles.headerwrapper}>
        <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
          <Ionicons name="chevron-back" size={hp("3%")} color="#565656" />
        </TouchableOpacity>
        <View style={styles.headerinnerwrapper}>
          <TouchableOpacity style={styles.followerbody}>
            <Text style={styles.followertext}>Followers</Text>
            <Text style={styles.followertext}>255</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followerbody}>
            <Text style={styles.followertext}>Following</Text>
            <Text style={styles.followertext}>25</Text>
          </TouchableOpacity>
        </View>
        {/* ends here */}
      </View>
      <View style={styles.folowerwapper}>
        {/* folowers list component */}
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
        <Followerslist />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    height: hp("12%"),
  },
  headerinnerwrapper: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  followerbody: {
    height: hp("8%"),
    width: wp("25%"),
    justifyContent: "center",
    alignItems: "center",
  },
  followertext: {
    fontFamily: "RBB",
    fontSize: rf(14),
    color: "#565656",
    marginHorizontal: 5,
  },
  folowerwapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Myfollowers);
