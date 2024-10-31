import React, { useState } from "react";
import {
  StyleSheet,
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
import { connect } from "react-redux";
import BottomTabMenu from "../../componwnts/BottomTabMenu";
import SearchBar from "../../componwnts/SearchBar";
import TextLable from "../SearchPage/components/TextLable";
import { TrendingContentData } from "../../Helper/DummyData";
import TrendingContent from "../SearchPage/components/TrendingContent";
import SearchHeader from "../../componwnts/SearchHeader";

const SearchTrending = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      {/* header component */}
      <SearchHeader navigation={props?.navigation} />
      {/* searchbar component */}
      <SearchBar placeholder={"Search Trending."} />
      <TextLable
        lable={"Trending"}
        image={require("../../assets/Trendingicon.png")}
      />
      {/* trending content showing all that component here */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wraper}>
          {TrendingContentData.map((item, index) => {
            return <TrendingContent item={item} key={index} />;
          })}
        </View>
        {/* ends here */}
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
  wraper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: hp("12%"),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(SearchTrending);
