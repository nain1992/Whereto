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
import Groupheader from "./components/Groupheader";
import TrendingContent from "../SearchPage/components/TrendingContent";
import Photosandvideos from "./components/Photosandvideos";
import { TrendingContentData } from "../../Helper/DummyData";
import Chatdeleteoptions from "./components/Chatdeleteoptions";

const Groupinfo = (props) => {
  //   const data = props?.route?.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />

      <ScrollView>
        {/* header here */}
        <Groupheader
          navigation={props?.navigation}
          onPeoplePress={() => props?.navigation?.navigate("Groupmambers")}
        />
        {/* ends here */}
        <View style={styles.photowrapper}>
          {/* text wrappers */}
          <Text style={styles.textphotos}>Photos & Videos </Text>
          <Text style={styles.seetext}>See all </Text>
        </View>
        <Photosandvideos />
        <View style={styles.photowrapper}>
          <Text style={styles.textphotos}>Where To's </Text>
          <Text style={styles.seetext}>See all </Text>
        </View>
        {/* ends here */}
        <View style={styles.contentwrapper}>
          {/* trending content components  */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {TrendingContentData.map((item, index) => {
              return <TrendingContent item={item} key={index} />;
            })}
          </ScrollView>
          {/* ends here */}
        </View>
        <View style={styles.photowrapper}>
          <Text style={styles.textphotos}>Chats</Text>
        </View>
        {/* delete options components for chat  */}
        <Chatdeleteoptions title={"Delete Chats"} />
        <Chatdeleteoptions title={"Report Chat"} />
        <Chatdeleteoptions title={"Mute"} optiontext={"off"} option />
        <Chatdeleteoptions title={"Exit Group"} />
        <Chatdeleteoptions title={"Report Group"} />
      </ScrollView>
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
  seetext: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#565656",
  },
  contentwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Groupinfo);
