import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  Animated,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Chatheader from "../../componwnts/Chatheader";
import Chatsearch from "./components/Chatsearch";
import Inboxmessages from "./components/Inboxmessages";
import BottomTabMenu from "../../componwnts/BottomTabMenu";
import { chatusersdata } from "../../Helper/DummyData";
import { Feather } from "@expo/vector-icons";

const Inbox = (props) => {
  //   const data = props?.route?.params;

  const scrollY = useRef(new Animated.Value(0)).current;
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const translateX = scrollY.interpolate({
    // main animation logic
    inputRange: [0, 100],
    outputRange: [0, 100],
    extrapolate: "clamp",
  });

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  useEffect(() => {
    const scrollListener = scrollY.addListener(({ value }) => {
      if (value > 100) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      scrollY.removeListener(scrollListener);
    };
  }, []); // Run the effect only once, similar to componentDidMount
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      {/* header here */}
      <Chatheader title={"CHAT"} navigation={props?.navigation} />
      {/* search bar for chat */}
      <Chatsearch placeholder={"Search"} />

      <ScrollView onScroll={onScroll} scrollEventThrottle={16}>
        <View style={{ marginBottom: hp("12%") }}>
          {chatusersdata.map((item, index) => {
            return (
              // main inbox msgs component
              <Inboxmessages
                onPress={() => props?.navigation?.navigate("Chat", item)}
                item={item}
                key={index}
              />
            );
          })}
        </View>
      </ScrollView>

      {isMenuVisible ? (
        // animation view code here
        <Animated.View
          style={{
            transform: [{ translateX }],
          }}
        >
          <BottomTabMenu navigation={props?.navigation} />
        </Animated.View>
      ) : (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Newmassege")}
          style={styles.searchbody}
        >
          <Feather name="search" size={hp("2.5%")} color="#fff" />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  searchbody: {
    height: hp("7%"),
    width: hp("7%"),
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    right: 25,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Inbox);
