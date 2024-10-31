import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import TextLable from "./components/TextLable";
import FeaturedContent from "./components/FeaturedContent";
import {
  TrendingContentData,
  featuredcontentsearchpage,
} from "../../Helper/DummyData";
import TrendingContent from "./components/TrendingContent";
import BottomTabMenu from "../../componwnts/BottomTabMenu";
import SearchHeader from "../../componwnts/SearchHeader";
import Search from "./components/Search";

const SearchPage = (props) => {
  const [searchcontent, setSearchcontent] = useState("");
  const [imgActive, setimgActive] = useState(0);

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
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
      <ScrollView>
        {/* search bar component */}
        <Search
          SearchPress={() => props?.navigation?.navigate("GeneralSearch")}
          // onPress={() => props?.navigation?.navigate("GeneralSearch")}
          value={searchcontent}
          onChangeText={(val) => setSearchcontent(val)}
          placeholder={'"Search for people, places, locations etc."'}
          multiline={true}
        />
        <View style={styles.filterbtnwrapper}>
          {/* filter btns code */}
          <TouchableOpacity style={styles.btnbody}>
            <AntDesign name="filter" size={hp("2%")} color="#B0B0B0" />
            <Text style={styles.btntext}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorybtn}>
            <AntDesign name="filter" size={hp("2%")} color="#B0B0B0" />
            <Text style={styles.btntext}>Category</Text>
          </TouchableOpacity>
        </View>
        {/* ends here */}
        {/* featured component */}
        <TextLable
          lable={"Featured"}
          image={require("../../assets/Star.png")}
        />
        {/* ends here */}
        <View style={styles.wrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredcontentsearchpage.map((item, index) => {
              // content component here
              return <FeaturedContent item={item} key={index} />;
            })}
          </ScrollView>
        </View>
        {/* view all text component */}
        <TextLable
          onPress={() => props?.navigation?.navigate("SearchTrending")}
          lable={"Trending"}
          image={require("../../assets/Trendingicon.png")}
          ViewAllText
        />
        {/* emds here */}

        <View style={styles.trendingwrapper}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
          >
            {/* trending component data main component here */}
            {TrendingContentData.map((item, index) => {
              return (
                <TrendingContent
                  onPress={() => props?.navigation?.navigate("SearchTrending")}
                  item={item}
                  key={index}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.WrapDot}>
          {TrendingContentData.map((item, index) => (
            // navigation dots
            <View
              key={index}
              style={imgActive == index ? styles.dotActive : styles.dot}
            ></View>
          ))}
        </View>
        {/* ends here */}
        <TextLable
          lable={"Popular"}
          image={require("../../assets/Popular.png")}
          onPress={() => props?.navigation?.navigate("SearchTrending")}
          ViewAllText
        />
        {/* trending components here */}
        <View style={styles.trendingwrapper}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
          >
            {TrendingContentData.map((item, index) => {
              return <TrendingContent item={item} key={index} />;
            })}
          </ScrollView>
        </View>
        {/* navigation dots */}
        <View style={styles.WrapDot}>
          {TrendingContentData.map((item, index) => (
            <View
              key={index}
              style={imgActive == index ? styles.dotActive : styles.dot}
            ></View>
          ))}
        </View>
        <TextLable
          lable={"Hand Picked For You"}
          image={require("../../assets/Handpicked.png")}
          onPress={() => props?.navigation?.navigate("SearchTrending")}
          ViewAllText
        />
        {/* trending components here */}
        <View style={styles.trendingwrapper}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
          >
            {TrendingContentData.map((item, index) => {
              return <TrendingContent item={item} key={index} />;
            })}
          </ScrollView>
        </View>
        {/* navigation dots */}
        <View style={styles.WrapDot}>
          {TrendingContentData.map((item, index) => (
            <View
              key={index}
              style={imgActive == index ? styles.dotActive : styles.dot}
            ></View>
          ))}
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
  filterbtnwrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("8%"),
    marginVertical: hp("2%"),
  },

  btnbody: {
    height: hp("5%"),
    width: wp("35%"),
    borderRadius: 15,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  categorybtn: {
    height: hp("5%"),
    width: wp("35%"),
    borderRadius: 15,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btntext: {
    fontFamily: "RR",
    fontSize: rf(10),
    color: "#B0B0B0",
    marginLeft: 5,
  },
  wrapper: {
    paddingLeft: wp("4%"),
  },
  trendingwrapper: {
    paddingLeft: wp("4%"),
    // marginBottom: hp("15%"),
  },
  WrapDot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%"),
    marginVertical: 5,
  },
  dotActive: {
    height: 8,
    width: 8,
    backgroundColor: "#008080",
    margin: 2,
    borderRadius: 10,
  },
  dot: {
    height: 8,
    width: 8,
    margin: 2,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(SearchPage);
