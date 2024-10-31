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
import SearchBar from "../../componwnts/SearchBar";
import Datefilter from "../Events/components/Datefilter";
import BottomTabMenu from "../../componwnts/BottomTabMenu";
import EventsAI from "./components/EventsAI";
import AIheader from "../../componwnts/AIheader";

const DestiRefiner = (props) => {
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
        {/* header starts */}
        <View style={{ marginBottom: hp("10%") }}>
          <AIheader title={"DESTI AI"} navigation={props?.navigation} />
          <View style={styles.textwrapper}>
            <Text style={styles.datetext}>Saturday 26, August</Text>
            <Text style={styles.GreetingText}>Good Morning</Text>
          </View>
          {/* search bar  */}
          <SearchBar
            value={Searchevents}
            onChangeText={(val) => setSearchEvents(val)}
            placeholder={"Search Events"}
          />
          <View style={styles.eventswrapper}>
            <Text style={styles.Eventstext}>Events</Text>
          </View>
          <View style={styles.datewrapper}>
            {/* filter components */}

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Datefilter
                _HandleFilter={_HandleFilter}
                title={"Today"}
                bydate={bytoday}
              />
              <Datefilter
                _HandleFilter={_HandleFilter}
                title={"August (3)"}
                bydate={bytoday}
              />
              <Datefilter
                _HandleFilter={_HandleFilter}
                title={"September (5)"}
                bydate={bytoday}
              />
              <Datefilter
                _HandleFilter={_HandleFilter}
                title={"October (1)"}
                bydate={bytoday}
              />
              <Datefilter
                _HandleFilter={_HandleFilter}
                title={"November(0)"}
                bydate={bytoday}
              />
            </ScrollView>
          </View>

          <View style={styles.eventcontentwrapper}>
            {/* Events AI wrapper */}
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
        </View>
      </ScrollView>
      {/* proceed btn code */}
      {isselected ? (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("PlannerAI")}
          style={styles.proceedbtn}
        >
          <Text style={styles.btntext}>Proceed</Text>
        </TouchableOpacity>
      ) : (
        // dynamic island
        <BottomTabMenu onHomePress navigation={props?.navigation} />
      )}
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
    fontSize: rf(10),
    color: "#B0B0B0",
  },
  GreetingText: {
    fontFamily: "RB",
    fontSize: rf(22),
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
  eventdatetext: {
    fontFamily: "RBB",
    fontSize: rf(11),
    color: "#565656",
    paddingLeft: wp("5%"),
    marginVertical: 10,
  },
  proceedbtn: {
    height: hp("5%"),
    width: wp("25%"),
    borderRadius: 100,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  btntext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(DestiRefiner);
