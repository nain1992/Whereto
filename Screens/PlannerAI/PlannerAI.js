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
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import Plannercard from "../Planner/components/Plannercard";
import AIheader from "../../componwnts/AIheader";
import AIPlannerFields from "./components/AIPlannerFields";

const PlannerAI = (props) => {
  //   const data = props?.route?.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      <KeyboardAvoidingScrollView>
        {/*header here */}
        <AIheader title={"DESTI AI"} navigation={props?.navigation} />
        {/* ends here */}

        {/* planer card */}
        <View style={styles.cardwrapper}>
          <ScrollView
            style={{ height: hp("35%") }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Plannercard />
          </ScrollView>
        </View>
        {/* fields  */}
        <AIPlannerFields
          title={"What category you like to explore ?"}
          placeholder={"Entertainment , food , fun.."}
          placeholderTextColor={"#B0B0B0"}
        />
        <AIPlannerFields
          image2={require("../../assets/p1.png")}
          title={"How many people are you ?"}
          placeholder={"Number of people"}
          placeholderTextColor={"#B0B0B0"}
        />
        <AIPlannerFields
          title={"Specific budget contraint ?"}
          placeholder={"40$ - 80$ etc...."}
          placeholderTextColor={"#B0B0B0"}
        />
        <AIPlannerFields
          title={"Any dietary preferences ?"}
          placeholder={"Peanuts Allergy , turmuric etc ..."}
          placeholderTextColor={"#B0B0B0"}
        />

        {/* generate plan btn */}

        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("AIresults")}
          style={styles.savebtn}
        >
          <Text style={styles.btntext}>Generate Plan</Text>
        </TouchableOpacity>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  cardwrapper: {
    paddingLeft: wp("5%"),
    flexDirection: "row",
    marginBottom: hp("2%"),
  },
  savebtn: {
    height: hp("6%"),
    width: wp("40%"),
    borderRadius: 100,
    backgroundColor: "#008080",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  btntext: {
    fontFamily: "RBB",
    fontSize: rf(14),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(PlannerAI);
