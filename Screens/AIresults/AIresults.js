import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import EventsAI from "../Destirefiner/components/EventsAI";
import AIheader from "../../componwnts/AIheader";

const AIresults = (props) => {
  const data = props?.route?.params;
  const [bytoday, setbytoday] = useState("All");
  const [isselected, setIsselected] = useState();
  const [isselected1, setIsselected1] = useState();

  const [Searchevents, setSearchEvents] = useState();
  const _HandleFilter = (bytoday) => {
    setbytoday(bytoday);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "dark"}
        backgroundColor={Platform.OS === "ios" ? "#fff" : "#222"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* //header starts here  */}
        <AIheader title={"DESTI AI"} navigation={props?.navigation} />
        <View style={styles.textwrapper}>
          <Text style={styles.datetext}>Results Looks...</Text>
          <Text style={styles.GreetingText}>Interesting</Text>
        </View>
        {/* ends here */}

        {/* Events mein components starts */}
        <View style={styles.eventcontentwrapper}>
          <EventsAI
            isselected={isselected}
            setIsselected={setIsselected}
            ondeletePress={() => setIsselected(!isselected)}
            onAddPress={() => setIsselected(!isselected)}
          />
          <EventsAI
            isselected={isselected1}
            setIsselected1={setIsselected1}
            ondeletePress={() => setIsselected1(!isselected1)}
            onAddPress={() => setIsselected1(!isselected1)}
          />
          <EventsAI
            isselected={isselected}
            setIsselected={setIsselected}
            ondeletePress={() => setIsselected(!isselected)}
            onAddPress={() => setIsselected(!isselected)}
          />
          <EventsAI
            isselected={isselected}
            setIsselected={setIsselected}
            ondeletePress={() => setIsselected(!isselected)}
            onAddPress={() => setIsselected(!isselected)}
          />
        </View>
      </ScrollView>
      {/* events ends here */}
      {/* proceed buton starts */}
      <View style={styles.proceedbtnwrapper}>
        <TouchableOpacity style={styles.regeneratebtn}>
          <Text style={styles.btntext}>Regenerate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.regeneratebtn,
            {
              backgroundColor: "#008080",
            },
          ]}
        >
          <Text
            style={[
              styles.btntext,
              {
                color: "#fff",
              },
            ]}
          >
            Proceed
          </Text>
        </TouchableOpacity>
        {/* ends here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textwrapper: {
    paddingLeft: wp("5%"),
    marginVertical: 10,
  },
  datetext: {
    fontFamily: "RB",
    fontSize: rf(20),
    color: "#B0B0B0",
  },
  GreetingText: {
    fontFamily: "RB",
    fontSize: rf(20),
    color: "#008080",
  },
  Eventstext: {
    fontFamily: "RM",
    fontSize: rf(13),
    color: "#565656",
  },
  eventswrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    marginVertical: 10,
  },
  destBody: {
    height: hp("4%"),
    width: wp("25%"),
    backgroundColor: "#008080",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  DestiRefinertext: {
    fontFamily: "RB",
    fontSize: rf(8),
    color: "#fff",
  },
  datewrapper: {
    // marginVertical: hp("1%"),
    paddingHorizontal: wp("3%"),
    flexDirection: "row",
    alignItems: "center",
  },
  eventcontentwrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: wp("100%"),
    paddingHorizontal: wp("3%"),
  },
  proceedbtnwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-around",
    marginBottom: 10,
  },
  regeneratebtn: {
    height: hp("6%"),
    width: wp("35%"),
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontFamily: "RBB",
    fontSize: rf(13),
    color: "#B0B0B0",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(AIresults);
