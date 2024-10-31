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
import Collection from "./components/Collection";
import { ScrollView } from "react-native-gesture-handler";

const SavedCollection = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "dark"}
        backgroundColor={Platform.OS === "ios" ? "#fff" : "#222"}
      />
      {/* header here */}
      <AIheader title={"DESTI AI"} navigation={props?.navigation} />
      <Text style={styles.choosetext}>Choose from Collection</Text>
      <ScrollView>
        {/* ends here */}
        <View style={styles.collectionwrapper}>
          {/* collection of pictures and post components */}
          <Collection image={require("../../assets/c1.png")} title={"All"} />
          <Collection
            image={require("../../assets/c1.png")}
            title={"Entertainment"}
          />
          <Collection image={require("../../assets/c1.png")} title={"Food"} />
          <Collection image={require("../../assets/c1.png")} title={"All"} />
          <Collection
            image={require("../../assets/c1.png")}
            title={"Entertainment"}
          />
          <Collection image={require("../../assets/c1.png")} title={"Food"} />
          <Collection image={require("../../assets/c1.png")} title={"All"} />
          <Collection
            image={require("../../assets/c1.png")}
            title={"Entertainment"}
          />
          <Collection image={require("../../assets/c1.png")} title={"Food"} />
          <Collection image={require("../../assets/c1.png")} title={"All"} />
          <Collection
            image={require("../../assets/c1.png")}
            title={"Entertainment"}
          />
          <Collection image={require("../../assets/c1.png")} title={"Food"} />
        </View>
      </ScrollView>
      {/* ends here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  choosetext: {
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "RM",
    fontSize: rf(12),
    color: "#B0B0B0",
  },
  collectionwrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(SavedCollection);
