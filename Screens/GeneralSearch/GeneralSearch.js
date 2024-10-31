import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import SearchBar from "../../componwnts/SearchBar";
import RecentSearchedPeople from "../SearchPage/components/RecentSearchedPeople";
import { TrendingContentData, stories } from "../../Helper/DummyData";
import Activities from "../../componwnts/Activities";
import TrendingContent from "../SearchPage/components/TrendingContent";
import SearchFilter from "./components/SearchFilter";
import SearchHeader from "../../componwnts/SearchHeader";
import FilterIcon from "./components/FilterIcon";

const GeneralSearch = (props) => {
  const [searchcontent, setSearchcontent] = useState("");
  const [byall, setByall] = useState("All");
  const [searchpeople, setSearchPeople] = useState(false);

  const _HandleFilter = (byall) => {
    setByall(byall);
    if (byall === "People") {
      setSearchcontent(false);
      setSearchPeople(!searchpeople);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      {/* header here */}
      <SearchHeader navigation={props?.navigation} />
      {/* search bar component here */}
      <SearchBar
        value={searchcontent}
        onChangeText={(val) => setSearchcontent(val)}
        placeholder={'"Search for people, places, locations etc."'}
        multiline={true}
      />
      {/* if search bar is emplty will show this below UI */}
      {searchcontent.length <= 1 ? (
        <>
          <Text style={styles.textActivities}>Activies</Text>
          <View style={styles.storieswrapper}>
            {/* main activities component */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {stories.map((item, index) => {
                return (
                  <Activities
                    // onPress={() => _HandleStories(item)}
                    key={index}
                    item={item}
                  />
                );
              })}
            </ScrollView>
          </View>
          <Text style={styles.textActivities}>Recent Searches</Text>
          {stories.map((item, index) => {
            // recent search component here
            return <RecentSearchedPeople item={item} key={index} />;
          })}
        </>
      ) : (
        <>
          {/* if searched will sho this UI below */}
          <View style={styles.filterwrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SearchFilter
                _HandleFilter={_HandleFilter}
                title={"All"}
                bychoice={byall}
              />
              <SearchFilter
                _HandleFilter={_HandleFilter}
                title={"Entertainment"}
                bychoice={byall}
              />
              <SearchFilter
                _HandleFilter={_HandleFilter}
                title={"Fun"}
                bychoice={byall}
              />
              <SearchFilter
                _HandleFilter={_HandleFilter}
                title={"Food"}
                bychoice={byall}
              />
              <SearchFilter
                _HandleFilter={_HandleFilter}
                title={"People"}
                bychoice={byall}
              />
              <SearchFilter
                _HandleFilter={_HandleFilter}
                title={"Places"}
                bychoice={byall}
              />
            </ScrollView>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wraper}>
              {TrendingContentData.map((item, index) => {
                return <TrendingContent item={item} key={index} />;
              })}
            </View>
          </ScrollView>
          {/* filter  component */}
          <FilterIcon />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  storieswrapper: {
    flexDirection: "row",
    width: wp("100%"),
    paddingLeft: 10,
  },
  textActivities: {
    fontFamily: "RR",
    fontSize: rf(13),
    color: "#B0B0B0",
    paddingLeft: wp("4%"),
    marginVertical: 10,
  },
  wraper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: hp("2%"),
  },
  filterwrapper: {
    marginVertical: hp("3%"),
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(GeneralSearch);
