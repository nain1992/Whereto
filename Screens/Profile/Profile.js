import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Header from "./components/Header";
import Followbtn from "./components/Followbtn";
import Moments from "./components/Moments";
import Profilecontent from "./components/Profilecontent";
import Postcontentsimple from "./components/Postcontentsimple";
import ShareModel from "../Home/components/ShareModel";
import CommentModel from "../Home/components/CommentModel";
import Profilecontentmultiple from "./components/Profilecontentmultiple";
import Profilecontentmulti2 from "./components/Profilecontentmulti2";
import BottomTabMenu from "../../componwnts/BottomTabMenu";
import Imagemodel from "./components/Imagemodel";
import { profilesimpleview } from "../../Helper/DummyData";

const Profile = (props) => {
  //   const data = props?.route?.params;

  const [isselected, setIsselected] = useState(1);
  const [isgridview, setIsgridview] = useState(true);
  const [sharepopup, setSharepopup] = useState(false);
  const [commentpopup, setCommentpopup] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const handleImagePress = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: hp("10%") }}>
          {/* header here */}

          <Header onMsgpress={() => props?.navigation?.navigate("Chat")} />

          {/* ends here */}
          <Text style={styles.biotext}>
            Blogging is my hobby an traveling is my passion Blogging is my hobby
            an traveling is my passion
          </Text>

          {/* follow btn component */}
          <Followbtn
            onPress={() => props?.navigation?.navigate("Myfollowers")}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: wp("5%"),
              marginTop: 5,
            }}
          >
            {/* moments component */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Moments />
              <Moments />
              <Moments />
              <Moments />
              <Moments />
              <Moments />
              <Moments />
              <Moments />
            </ScrollView>
          </View>
          {/* pressable icons  */}
          <View style={styles.iconwrapper}>
            <TouchableOpacity
              onPress={() => {
                setIsselected(1);
                setIsgridview(true);
              }}
              style={[
                styles.iconbody,
                {
                  borderColor: isselected === 1 ? "#008080" : "transparent",
                },
              ]}
            >
              {isselected === 1 ? (
                <Image
                  source={require("../../assets/12.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../../assets/a1.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsselected(2);
              }}
              style={[
                styles.iconbody,
                {
                  borderColor: isselected === 2 ? "#008080" : "transparent",
                },
              ]}
            >
              {isselected === 2 ? (
                <Image
                  source={require("../../assets/a2.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../../assets/14.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setIsselected(3);
              }}
              style={[
                styles.iconbody,
                {
                  borderColor: isselected === 3 ? "#008080" : "transparent",
                },
              ]}
            >
              {isselected === 3 ? (
                <Image
                  source={require("../../assets/a3.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../../assets/13.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          </View>
          {/* ends here */}

          <View style={styles.contentwrapper}>
            {isgridview ? (
              <>
                {/* multiple pictures  component */}
                <Profilecontentmultiple
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
                <Profilecontentmulti2
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
                {/* single picture  component */}

                <Profilecontent
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
                <Profilecontentmultiple
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
                <Profilecontentmulti2
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
                <Profilecontent
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
                <Profilecontentmultiple
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
                <Profilecontentmulti2
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
                <Profilecontent
                  onPress={() => setIsgridview(false)}
                  image={require("../../assets/20.png")}
                />
              </>
            ) : (
              <>
                {profilesimpleview.map((item, index) => {
                  // same components as above switching on btns press
                  return (
                    <Postcontentsimple
                      setSharepopup={setSharepopup}
                      sharepopup={sharepopup}
                      commentpopup={commentpopup}
                      setCommentpopup={setCommentpopup}
                      item={item}
                      key={index}
                    />
                  );
                })}
              </>
            )}
          </View>
        </View>
      </ScrollView>
      {/* bottom sland component */}
      <BottomTabMenu onHomePress navigation={props?.navigation} />
      {/* share model */}
      {sharepopup && <ShareModel onPress={() => setSharepopup(false)} />}
      {/* comment model */}
      {commentpopup && <CommentModel onPress={() => setCommentpopup(false)} />}
      <Imagemodel
        visible={isModalVisible}
        imagelarge={require("../../assets/20.png")}
        onClose={handleCloseModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  biotext: {
    paddingHorizontal: wp("5%"),
    fontFamily: "RR",
    fontSize: rf(13),
    color: "#161618",
    marginVertical: 8,
  },
  iconwrapper: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: wp("5%"),
  },
  iconbody: {
    height: hp("5%"),
    width: wp("33%"),
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#008080",
  },
  contentwrapper: {
    paddingHorizontal: wp("5%"),
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Profile);
