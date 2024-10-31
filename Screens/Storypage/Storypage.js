import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AntDesign, Feather } from "@expo/vector-icons";

const Storypage = (props) => {
  const data = props?.route?.params;
  const [storyreply, setStoryreply] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      {/* display image code here */}
      <ImageBackground
        resizeMode="cover"
        source={data?.[1]?.image}
        style={styles.imagebody}
      >
        <View style={styles.barwrapper}>
          {/* progress bars code here */}
          <View style={styles.barview}></View>
          <View style={styles.barview}></View>
          <View style={styles.barview}></View>
          <View style={styles.barview}></View>
        </View>
        {/* user infor code here */}
        <View style={styles.posterinfowrapper}>
          <View style={styles.posterinnerwrapper}>
            <View style={styles.posterimage}>
              <Image
                source={require("../../assets/storyposter.png")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
            <Text style={styles.postername}>Micheal Joseph</Text>
            <Text style={styles.timetext}>17h ago</Text>
          </View>
          <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
            <AntDesign name="close" size={hp("3%")} color="#000000" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* text input field here */}
      <View style={styles.replaywrapper}>
        <View style={styles.typingbody}>
          <TextInput
            style={styles.inputstyles}
            multiline={true}
            placeholder={"Reply..."}
            value={storyreply}
            onChangeText={(val) => setStoryreply(val)}
          />
        </View>
        <TouchableOpacity>
          <Feather name="send" size={hp("3%")} color="#000000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imagebody: {
    width: wp("100%"),
    height: hp("90%"),
  },
  barview: {
    height: 5,
    flex: 1,
    backgroundColor: "#E9E9E9",
    borderRadius: 10,
    margin: 2,
  },
  barwrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("100%"),
  },
  replaywrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    height: hp("10%"),
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
  },
  typingbody: {
    height: 44,
    width: wp("80%"),
    borderRadius: 100,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  inputstyles: {
    height: "100%",
    width: "100%",
    fontFamily: "RM",
    fontSize: rf(11),
    color: "#000000",
  },
  posterinfowrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
    marginVertical: 5,
  },
  posterinnerwrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  posterimage: {
    height: hp("5%"),
    width: hp("5%"),
    borderRadius: 100,
    overflow: "hidden",
  },
  postername: {
    fontFamily: "RB",
    fontSize: rf(13),
    color: "#F7F7F7",
    marginHorizontal: 5,
  },
  timetext: {
    fontFamily: "RB",
    fontSize: rf(10),
    color: "#F7F7F7",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Storypage);
