import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  Animated,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Chatheader from "../../componwnts/Chatheader";
import { chatusersdata } from "../../Helper/DummyData";
import Chatsearch from "../Inbox/components/Chatsearch";
import Selectuserfornewmassege from "./component/Selectuserfornewmassege";

const Newmassege = (props) => {
  //   const data = props?.route?.params;
  const [isselected, setIsselected] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      {/* header here */}
      <Chatheader title={"NEW MESSAGE"} navigation={props?.navigation} />
      <Text style={styles.totext}>To</Text>
      {/* search bar component */}
      <Chatsearch placeholder={"Search"} />

      <ScrollView>
        <View style={{ marginBottom: hp("12%") }}>
          {chatusersdata.map((item, index) => {
            return (
              // main component for new msgs
              <Selectuserfornewmassege
                // onPress={() => props?.navigation?.navigate("Chat", item)}
                item={item}
                key={index}
                onIconpress={() => setIsselected(!isselected)}
                setIsselected={setIsselected}
                isselected={isselected}
              />
            );
          })}
        </View>
      </ScrollView>
      {/* chat now btn code */}
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Chat")}
        style={styles.newchatbtn}
      >
        <Text style={styles.chattext}>Chat Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  newchatbtn: {
    height: hp("6%"),
    width: wp("70%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008080",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
  chattext: {
    fontFamily: "RB",
    fontSize: rf(13),
    color: "#fff",
  },
  totext: {
    fontFamily: "RB",
    fontSize: rf(12),
    color: "#B0B0B0",
    paddingHorizontal: wp("5%"),
    marginVertical: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Newmassege);
