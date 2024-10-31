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
import Likepost from "./components/Likepost";
import Savedpost from "./components/Savedpost";

const Notifications = (props) => {
  //   const data = props?.route?.params;

  const [isacivebtn, setIsacivebtn] = useState("Activity");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header here */}
        <View style={styles.headerbody}>
          <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
            <Ionicons name="chevron-back" size={hp("2.5%")} color="#565656" />
          </TouchableOpacity>
          <View style={styles.headertitlebody}>
            <Text style={styles.headertitle}>NOTIFICATIONS</Text>
          </View>
        </View>
        {/* activity btns here */}
        <View style={styles.btnwrapper}>
          <TouchableOpacity
            onPress={() => setIsacivebtn("Activity")}
            style={styles.activitybtn}
          >
            <Text
              style={[
                styles.btntext,
                {
                  color: isacivebtn === "Activity" ? "#565656" : "#B0B0B0",
                },
              ]}
            >
              Activity
            </Text>
          </TouchableOpacity>
          {/* Saved btn here */}
          <TouchableOpacity
            onPress={() => setIsacivebtn("Saved")}
            style={[
              styles.activitybtn,
              {
                borderRightWidth: 0,
              },
            ]}
          >
            <Text
              style={[
                styles.btntext,
                {
                  color: isacivebtn === "Saved" ? "#565656" : "#B0B0B0",
                },
              ]}
            >
              Saved
            </Text>
          </TouchableOpacity>
        </View>
        {/* see who liked your post components here */}
        {isacivebtn === "Activity" ? (
          <>
            <View style={styles.attentionpostbody}>
              <View style={styles.imagebody1}>
                <Image
                  source={require("../../assets/user1.png")}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={styles.attentiontext}>
                  Wooho you are getting attraction
                </Text>
                <Text style={styles.smalltext}>Approve or Ignore Request</Text>
              </View>
            </View>
            <Text style={styles.recenttext}>Recent</Text>
            {/* like post component */}
            <Likepost
              postimage
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Likepost
              postimage
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Text style={styles.recenttext}>Today</Text>

            <Likepost
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Likepost
              postimage
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Likepost
              postimage
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Text style={styles.recenttext}>Previous</Text>

            <Likepost
              postimage
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Likepost
              postimage
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Likepost
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Likepost
              postimage
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Likepost
              postimage
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
            <Likepost
              image={require("../../assets/storyposter.png")}
              name={"Kristin.Watson"}
              time={"Liked your story 10 mins ago"}
              image1={require("../../assets/Rectangle4.png")}
            />
          </>
        ) : (
          <>
            {/* on press btn changed UI */}
            <View style={styles.attentionpostbody}>
              <View style={styles.imagebody1}>
                <Image
                  source={require("../../assets/user1.png")}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={styles.attentiontext}>
                  Wooho you are getting attraction
                </Text>
                <Text style={styles.smalltext}>Approve or Ignore Request</Text>
              </View>
            </View>
            <Text style={styles.recenttext}>Recent</Text>
            {/* components saved starts here */}

            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Text style={styles.recenttext}>Today</Text>
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Text style={styles.recenttext}>Previous</Text>
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
            <Savedpost
              name={"Trending Places in Dubai you must visit."}
              image1={require("../../assets/11.png")}
            />
          </>
        )}
        {/* components saved ends here */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerbody: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    height: hp("8%"),
    borderBottomWidth: 1,
    borderColor: "#B0B0B0",
  },
  headertitlebody: {
    flex: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
  headertitle: {
    fontFamily: "RBB",
    fontSize: rf(16),
    color: "#565656",
  },
  btnwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
  },
  activitybtn: {
    justifyContent: "center",
    alignItems: "center",
    height: hp("5%"),
    width: wp("45%"),
    borderRightWidth: 1,
    borderColor: "#B0B0B0",
  },
  btntext: {
    fontFamily: "RBB",
    fontSize: rf(13),
    color: "#565656",
  },
  recenttext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#B0B0B0",
    paddingLeft: wp("5%"),
    marginVertical: 5,
  },
  attentionpostbody: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    marginVertical: 10,
  },
  imagebody1: {
    height: hp("7%"),
    width: hp("7%"),
    overflow: "hidden",
    borderRadius: 100,
    marginRight: 10,
  },
  attentiontext: {
    fontFamily: "RBB",
    fontSize: rf(12),
    color: "#565656",
  },
  smalltext: {
    fontFamily: "RR",
    fontSize: rf(10),
    color: "#B0B0B0",
    marginTop: 5,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Notifications);
