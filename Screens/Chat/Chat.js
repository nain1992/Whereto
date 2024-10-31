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
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Chatheader from "./components/Chatheader";
import Chatting from "./components/Chatting";
import { chatdata } from "../../Helper/DummyData";

const Chat = (props) => {
  const data = props?.route?.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />

      {/* header starts */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: hp("9%") }}
      >
        <Chatheader
          data={data}
          image={data?.image}
          title={data?.name}
          navigation={props?.navigation}
          onPress={() => props?.navigation?.navigate("Groupinfo")}
        />
        {/* ends here */}
        {/* user profile starts */}
        <View style={styles.userprofileexpend}>
          <View style={styles.profileimage}>
            <Image
              source={data?.image}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.nametext}>{data?.name}</Text>
          <Text style={styles.statustext}>We do fun walk</Text>
          {/* ends here */}
        </View>
        <View>
          {/* chatting main component */}
          {chatdata.map((item, index) => {
            return <Chatting item={item} key={index} />;
          })}
        </View>
      </ScrollView>
      {/* type msf wrapper  */}
      <View style={styles.typemsgwrapper}>
        <View style={styles.iconbody}>
          <Image
            source={require("../../assets/camera.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
        </View>
        <TextInput
          placeholder="Send Massege"
          placeholderTextColor={"#B0B0B0"}
          multiline={true}
          style={styles.inputstyles}
        />
      </View>
      {/* type msg ends here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  userprofileexpend: {
    height: hp("30%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
  },
  profileimage: {
    height: hp("10%"),
    width: hp("10%"),
    borderRadius: 100,
    overflow: "hidden",
  },
  nametext: {
    fontFamily: "RM",
    fontSize: rf(13),
    color: "#565656",
  },
  statustext: {
    fontFamily: "RM",
    fontSize: rf(11),
    color: "#D9D9D9",
  },
  typemsgwrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    backgroundColor: "#D9D9D9",
    height: hp("6%"),
    width: wp("90%"),
    alignSelf: "center",
    borderRadius: 10,
  },
  iconbody: {
    height: hp("6%"),
    width: hp("6%"),
    overflow: "hidden",
    borderRadius: 100,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
  },
  inputstyles: {
    height: "100%",
    width: "90%",
    fontFamily: "RM",
    fontSize: rf(12),
    color: "#000000",
    padding: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Chat);
