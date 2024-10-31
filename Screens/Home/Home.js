import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Animated,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import GeneralHeader from "../../componwnts/GeneralHeader";
import HomeStories from "./components/HomeStories";
import Postcontent from "./components/Postcontent";
import { postdata, stories } from "../../Helper/DummyData";
import BottomTabMenu from "../../componwnts/BottomTabMenu";
import ShareModel from "./components/ShareModel";
import CommentModel from "./components/CommentModel";
import PlannerPost from "./components/PlannerPost";

const Home = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const [sharepopup, setSharepopup] = useState(false);
  const [commentpopup, setCommentpopup] = useState(false);
  const [isplannervisible, setIsplannervisible] = useState(true);

  // scroll function logic
  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y < 1) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };
  const _HandleStories = () => {
    props?.navigation?.navigate("Storypage", stories);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      {isHidden && (
        // header here
        <View>
          <GeneralHeader
            HomeHeader
            HomeHeaderBell
            onPress={() => props?.navigation?.navigate("Inbox")}
            onPresswallet={() => props?.navigation?.navigate("Events")}
            onBellPress={() => props?.navigation?.navigate("Notifications")}
          />
          <View style={styles.storieswrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {stories.map((item, index) => {
                return (
                  // main components for stories here
                  <HomeStories
                    onPress={() => _HandleStories(item)}
                    key={index}
                    item={item}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      )}
      {isplannervisible ? (
        <View style={styles.wrapper}>
          {/* main content post components start here  */}
          <ScrollView
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            {postdata.map((item, index) => {
              return (
                <Postcontent
                  onProflePress={() => props?.navigation?.navigate("Profile")}
                  setSharepopup={setSharepopup}
                  sharepopup={sharepopup}
                  commentpopup={commentpopup}
                  setCommentpopup={setCommentpopup}
                  // onIconPress={() => props?.navigation?.navigate("Createpage")}
                  onIconPress={() => setIsplannervisible(!isplannervisible)}
                  onPress={() =>
                    props?.navigation?.navigate("ExpendScreen", item)
                  }
                  item={item}
                  key={index}
                />
              );
            })}
            {/* ends here */}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.wrapper}>
          {/* press to save in planner component here */}
          <ScrollView
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            {postdata.map((item, index) => {
              return (
                <PlannerPost
                  item={item}
                  key={index}
                  setSharepopup={setSharepopup}
                  sharepopup={sharepopup}
                  commentpopup={commentpopup}
                  setCommentpopup={setCommentpopup}
                  onIconPress={() => setIsplannervisible(!isplannervisible)}
                  onPlannerPress={() => props?.navigation?.navigate("Planner")}
                />
              );
            })}
          </ScrollView>
        </View>
      )}
      {/* bottom island component */}
      {isHidden && <BottomTabMenu navigation={props?.navigation} />}
      {/* sharemodel component */}
      {sharepopup && <ShareModel onPress={() => setSharepopup(false)} />}
      {/* comment model component */}
      {commentpopup && <CommentModel onPress={() => setCommentpopup(false)} />}
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
  wrapper: {
    paddingHorizontal: wp("5%"),
    marginVertical: hp("2%"),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Home);
