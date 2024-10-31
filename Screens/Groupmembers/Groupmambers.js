import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Groupheader from "../Groupinfo/components/Groupheader";
import Header from "./components/Header";
import HomeStories from "../Home/components/HomeStories";
import { members } from "../../Helper/DummyData";

const Groupmambers = (props) => {
  //   const data = props?.route?.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      {/* header here */}
      <Header navigation={props?.navigation} />
      {/* ends here */}
      <View style={styles.photowrapper}>
        <Text style={styles.textphotos}>Group Members</Text>
      </View>

      <View style={styles.memberwrapper}>
        {/* main stories components */}
        {members.map((item, index) => {
          return <HomeStories item={item} key={index} />;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  photowrapper: {
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  textphotos: {
    fontFamily: "RBB",
    fontSize: rf(12),
    color: "#565656",
  },
  memberwrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    // paddingHorizontal: wp("5%"),
    width: wp("90%"),
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Groupmambers);
