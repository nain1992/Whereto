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
import HeaderEvents from "./components/HeaderEvents";
import SearchBar from "../../componwnts/SearchBar";
import Datefilter from "./components/Datefilter";
import EventsContent from "./components/EventsContent";
import { eventsData } from "../../Helper/DummyData";
import BottomTabMenu from "../../componwnts/BottomTabMenu";

const Events = (props) => {
  const data = props?.route?.params;
  const [bytoday, setbytoday] = useState("All");
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
      {/* header starts */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderEvents title={"EVENTS"} navigation={props?.navigation} />
        {/* ends here */}
        {/* main lable text */}
        <View style={styles.textwrapper}>
          <Text style={styles.datetext}>Saturday 26, August</Text>
          <Text style={styles.GreetingText}>Good Morning</Text>
        </View>
        {/* search bar */}
        <SearchBar
          value={Searchevents}
          onChangeText={(val) => setSearchEvents(val)}
          placeholder={"Search Events"}
        />
        {/* refiner btn */}
        <View style={styles.eventswrapper}>
          <Text style={styles.Eventstext}>Events</Text>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("Destirefiner")}
            style={styles.destBody}
          >
            <Text style={styles.DestiRefinertext}>DestiRefiner</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.datewrapper}>
          {/* filters here */}
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
        <Text style={styles.eventdatetext}>9 August</Text>
        <View style={styles.eventcontentwrapper}>
          {/* main events components  */}
          <EventsContent />
          <EventsContent />
        </View>
        <Text style={styles.eventdatetext}>10 September</Text>
        <View style={styles.eventcontentwrapper}>
          {/* main events components  */}

          <EventsContent />
          <EventsContent />
          <EventsContent />
          <EventsContent />
        </View>
      </ScrollView>
      <BottomTabMenu onHomePress navigation={props?.navigation} />
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
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Events);
