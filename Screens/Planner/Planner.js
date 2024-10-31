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
import Plannercard from "./components/Plannercard";
import Plannerfields from "./components/Plannerfields";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

const Planner = (props) => {
  //   const data = props?.route?.params;

  const [isicon, setIsicon] = useState(0);
  const [istimeicon, setTimeicon] = useState(0);
  const [isdateicon, setIsdateicon] = useState(0);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count - 1);
  };
  const handleAddacount = () => {
    setCount(count + 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      <KeyboardAvoidingScrollView>
        {/* header here */}
        <View style={styles.headerbody}>
          <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
            <Ionicons name="chevron-back" size={hp("2.5%")} color="#565656" />
          </TouchableOpacity>
          <View style={styles.headertitlebody}>
            <Text style={styles.headertitle}>PLANNER</Text>
          </View>
        </View>
        {/* ends here */}
        <Text style={styles.eventstext}>Selected Events</Text>
        <View style={styles.cardwrapper}>
          <ScrollView
            style={{ height: hp("35%") }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {/* planner card components */}
            <Plannercard />
            <Plannercard />
            <Plannercard />
            <Plannercard />
            <Plannercard />
            <Plannercard />
            <Plannercard />
          </ScrollView>
        </View>
        {/* planer fields here */}
        <Plannerfields
          value={isicon}
          onChangeText={(val) => {
            setIsicon(val.length);
          }}
          title={"Name of the event ?*"}
          image={
            isicon >= 1
              ? require("../../assets/g1.png")
              : require("../../assets/s1.png")
          }
          image2={require("../../assets/s1.png")}
          placeholder={"Name your event"}
          placeholderTextColor={"#B0B0B0"}
        />
        <Plannerfields
          value={istimeicon}
          onChangeText={(val) => {
            setTimeicon(val.length);
          }}
          title={"Timings"}
          image={
            istimeicon >= 1
              ? require("../../assets/g1.png")
              : require("../../assets/event1.png")
          }
          image2={require("../../assets/event1.png")}
          placeholder={"Select the time"}
          placeholderTextColor={"#B0B0B0"}
        />
        <Plannerfields
          value={isdateicon}
          onChangeText={(val) => {
            setIsdateicon(val.length);
          }}
          title={"Event date ?"}
          image={
            isdateicon > 1
              ? require("../../assets/g1.png")
              : require("../../assets/b1.png")
          }
          image2={require("../../assets/b1.png")}
          placeholder={"DD/MM/YYYY"}
          placeholderTextColor={"#B0B0B0"}
        />
        {/* <Plannerfields
          value={count}
          onAddPress={handleAddacount}
          onMinusPress={handleCount}
          title={"People ?"}
          image={require("../../assets/p1.png")}
          image2={require("../../assets/m1.png")}
          placeholder={"Number of people"}
          placeholderTextColor={"#B0B0B0"}
        /> */}
        {/* ends here */}
        <Text style={styles.titletext}>People?</Text>
        <View style={styles.fieldbody}>
          {/* count field here */}
          <TouchableOpacity
            onPress={handleAddacount}
            style={styles.iconbodyplus}
          >
            <Image
              source={require("../../assets/p1.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text
              style={{ fontFamily: "RM", fontSize: rf(11), color: "#008080" }}
            >
              {count}
            </Text>
          </View>
          {/* increase count icon */}
          <TouchableOpacity onPress={handleCount} style={styles.iconbodyplus}>
            <Image
              source={require("../../assets/m1.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {/* save btn here */}
        <TouchableOpacity style={styles.savebtn}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.btntext}>Save</Text>
          </View>
          <View style={styles.iconbody}>
            <Image
              source={require("../../assets/t2.png")}
              style={{ height: "90%", width: "90%" }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        {/* ends here */}
      </KeyboardAvoidingScrollView>
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
  },
  iconbodyplus: {
    height: 15,
    width: 15,
    overflow: "hidden",
  },
  titletext: {
    fontFamily: "RM",
    fontSize: rf(12),
    color: "#565656",
    marginBottom: 8,
    paddingLeft: wp("5%"),
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
  eventstext: {
    fontFamily: "RBB",
    fontSize: rf(10),
    color: "#D9D9D9",
    paddingLeft: wp("5%"),
    marginBottom: 10,
  },
  cardwrapper: {
    paddingLeft: wp("5%"),
    flexDirection: "row",
    marginBottom: hp("2%"),
  },
  savebtn: {
    height: hp("5.5%"),
    width: wp("70%"),
    borderRadius: 100,
    backgroundColor: "#008080",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  iconbody: {
    height: 20,
    width: 20,
    overflow: "hidden",
    marginRight: 10,
  },
  btntext: {
    fontFamily: "RM",
    fontSize: rf(12),
    color: "#fff",
    marginLeft: wp("5%"),
  },
  fieldbody: {
    height: hp("5%"),
    width: wp("90%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#008080",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    alignSelf: "center",
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Planner);
