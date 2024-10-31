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
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import AIheader from "../../componwnts/AIheader";
import PlannerEvent from "./components/PlannerEvent";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native";
import BottomTabMenu from "../../componwnts/BottomTabMenu";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

const DestiAIplaner = (props) => {
  const [isselected, setIsselected] = useState("DESTI PLANNER");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "dark"}
        backgroundColor={Platform.OS === "ios" ? "#fff" : "#222"}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: hp("15%") }}>
          {/* headers component */}
          <AIheader title={"DESTI AI"} navigation={props?.navigation} />
          <View style={styles.framewrapper}>
            {/* planner btns  */}
            {isselected === "DESTI PLANNER" ? (
              <Image
                source={require("../../assets/ai1.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("../../assets/ai2.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            )}
          </View>
          {isselected === "DESTI PLANNER" ? (
            <Text style={styles.plantext}>Plan your trip with</Text>
          ) : (
            <Text style={styles.plantext}>Refine your trip with</Text>
          )}
          <View style={styles.btnwrapper}>
            <TouchableOpacity
              onPress={() => setIsselected("DESTI PLANNER")}
              style={[
                styles.destiplanerbtn,
                {
                  backgroundColor:
                    isselected === "DESTI PLANNER" ? "#008080" : "#fff",
                },
              ]}
            >
              <Text
                style={[
                  styles.btntext,
                  {
                    color: isselected === "DESTI PLANNER" ? "#fff" : "#B0B0B0",
                  },
                ]}
              >
                DESTI PLANNER
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsselected("DESTI REFINER")}
              style={[
                styles.destiplanerbtn,
                {
                  backgroundColor:
                    isselected === "DESTI REFINER" ? "#008080" : "#fff",
                },
              ]}
            >
              <Text
                style={[
                  styles.btntext,
                  {
                    color: isselected === "DESTI REFINER" ? "#fff" : "#B0B0B0",
                  },
                ]}
              >
                DESTI REFINER
              </Text>
            </TouchableOpacity>
            {/* ends here */}
          </View>
          {isselected === "DESTI PLANNER" ? (
            // swtiched UI on btn press
            <View style={{ flex: 1 }}>
              <Text style={styles.seetext}>See what I can do </Text>
              <View style={styles.wrappr}>
                <ScrollView horizontal>
                  <PlannerEvent title={"Plan Adventure & Outdoor"} />
                  <PlannerEvent title={"Find sightseeing & landmarks"} />
                  <PlannerEvent title={"Make it budhet \n friendly"} />
                </ScrollView>
              </View>
              <Text
                style={[
                  styles.seetext,
                  {
                    marginTop: hp("8%"),
                  },
                ]}
              >
                Lets start planning
              </Text>
              <View style={styles.searchwrapper}>
                <View style={styles.searchbody}>
                  <TextInput
                    placeholder="Search here"
                    style={styles.inputstyles}
                    placeholderTextColor={"#B0B0B0"}
                  />
                </View>
                <TouchableOpacity style={styles.Startbtn}>
                  <Text style={styles.starttext}>Start</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <Text style={styles.choosetext}>Choose from</Text>

              {/* Planner Events wrapper*/}
              <View style={styles.wrappr2}>
                <PlannerEvent
                  onPress={() => props?.navigation?.navigate("Destirefiner")}
                  title={"Events\nCurated"}
                />
                <PlannerEvent
                  onPress={() => props?.navigation?.navigate("SavedCollection")}
                  title={"Saved\nEvents"}
                />
              </View>
              <Text
                style={[
                  styles.choosetext,
                  {
                    marginTop: hp("5%"),
                  },
                ]}
              >
                “Through iterative evaluation and adjustment, plans become
                resilient, effective, and aligned with goals.”
              </Text>
            </>
          )}
        </View>
      </ScrollView>
      {/* bottom dinamic island component */}
      <BottomTabMenu navigation={props?.navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  framewrapper: {
    height: hp("20%"),
    width: hp("30%"),
    alignSelf: "center",
    overflow: "hidden",
  },
  plantext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#B0B0B0",
    textAlign: "center",
    marginVertical: 20,
  },
  btnwrapper: {
    height: hp("7%"),
    width: wp("80%"),
    borderRadius: 100,
    backgroundColor: "#fff",

    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  destiplanerbtn: {
    height: hp("7%"),
    width: wp("40%"),
    borderRadius: 100,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontFamily: "RBB",
    fontSize: rf(11),
    color: "#fff",
  },
  seetext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#B0B0B0",
    paddingLeft: wp("5%"),
    marginVertical: 15,
  },
  wrappr: {
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
  },
  searchwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
  },
  searchbody: {
    height: hp("5%"),
    width: wp("70%"),
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
  },
  Startbtn: {
    height: hp("5%"),
    width: wp("15%"),
    borderRadius: 10,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
  },
  starttext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#fff",
  },
  inputstyles: {
    width: "100%",
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#008080",
  },
  choosetext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#B0B0B0",
    textAlign: "center",
    marginVertical: 15,
  },
  wrappr2: {
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(DestiAIplaner);
