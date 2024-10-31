import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import {
  Ionicons,
  Feather,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { postdata } from "../../../Helper/DummyData";
import { Pressable } from "react-native";

const PlannerPost = (props) => {
  const { item } = props;
  const [imgActive, setimgActive] = useState(0);
  const [like, setLike] = useState();
  let postpictures = [
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
  ];

  let likes = [
    {
      shareimage: like
        ? require("../../../assets/share11.png")
        : require("../../../assets/share1.png"),
      title: "40",
    },
    {
      shareimage: require("../../../assets/share2.png"),
      title: "10",
    },
    {
      shareimage: require("../../../assets/share3.png"),
      title: "16",
    },
  ];

  const likeButton = (index) => {
    if (index === 0) {
      setLike(!like);
    } else if (index === 2) {
      props?.setSharepopup(true);
    } else if (index === 1) {
      props?.setCommentpopup(true);
    }

    // if (index === 2) {
    //   try {
    //     const result = await Share.share({
    //       message: "Check out this awesome post!",
    //     });

    //     if (result.action === Share.sharedAction) {
    //       if (result.activityType) {
    //       } else {
    //       }
    //     } else if (result.action === Share.dismissedAction) {
    //     }
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // }
  };

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
    <View style={styles.container}>
      <View style={styles.profilenamepicturebody}>
        <View style={styles.innderview}>
          <Pressable
            onPress={props?.onProflePress}
            style={styles.profilepicture}
          >
            <Image
              source={item?.storypic}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </Pressable>
          <View>
            <Text style={styles.nametext}>{item?.name}</Text>
            <Text style={styles.posttime}>{item?.time}</Text>
          </View>
        </View>
        <View style={styles.iconwrapper}>
          <Text style={styles.datetext}>{item?.date}</Text>
          <TouchableOpacity
            onPress={props?.onIconPress}
            style={styles.iconbody}
          >
            <Image
              source={require("../../../assets/p3.png")}
              style={{ height: "70%", width: "70%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
      >
        {postdata.map((item, index) => {
          return (
            <ImageBackground
              item={item}
              key={index}
              source={item?.image}
              style={styles.Postimage}
            >
              <View style={styles.LocationDetailsBody}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0.4,
                  }}
                >
                  <Ionicons
                    name="md-location-outline"
                    size={hp("2%")}
                    color="#fff"
                  />
                  <Text style={styles.text}>{item?.location}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0.1,
                  }}
                >
                  <Feather name="users" size={hp("2%")} color="#fff" />
                  <Text
                    style={[
                      styles.text,
                      {
                        marginLeft: 5,
                      },
                    ]}
                  >
                    {item?.num}
                  </Text>
                </View>
                <View style={styles.AEDbody}>
                  <Text style={styles.text}>{item?.AED}</Text>
                </View>
                <Text
                  style={[
                    styles.text,
                    {
                      marginRight: 10,
                    },
                  ]}
                >
                  {item?.food}
                </Text>
              </View>
              <TouchableOpacity
                onPress={props?.onPress}
                style={styles.iconbodyvector}
              >
                <Image
                  source={require("../../../assets/largeicon.png")}
                  style={{ height: "40%", width: "40%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </ImageBackground>
          );
        })}
      </ScrollView>

      <View>
        <View style={styles.container1}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {postpictures.map((item, index) => {
              return (
                <ImageBackground
                  source={item}
                  key={index}
                  style={styles.otherpicturesofpostbody}
                >
                  <View style={{ height: 15, width: 15, overflow: "hidden" }}>
                    <Image
                      source={require("../../../assets/tick.png")}
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                </ImageBackground>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={props?.onPlannerPress}
            style={styles.saveplannerbtn}
          >
            <Text style={styles.btntext}>Save To Planner</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.comenttext}>{item?.comment}</Text>
        <View style={styles.sharingoptionsWrapper}>
          <View style={styles.sharinginnderwrapper}>
            {likes.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => likeButton(index)}
                  // onPress={onShare}
                  key={index}
                  style={{ alignItems: "center" }}
                >
                  <View style={{ height: 18, width: 18, overflow: "hidden" }}>
                    <Image
                      source={item?.shareimage}
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.likestext}>{item?.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }}>
            <FontAwesome name="bookmark" size={hp("3%")} color="#008080" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  WrapDot: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    bottom: hp("22%"),
  },
  dotActive: {
    height: 8,
    width: 8,
    backgroundColor: "#000000",
    margin: 3,
    borderRadius: 10,
  },
  dot: {
    height: 5,
    width: 5,
    margin: 3,
    backgroundColor: "#B0B0B0",
    borderRadius: 10,
  },

  profilenamepicturebody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innderview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profilepicture: {
    height: hp("5%"),
    width: hp("5%"),
    borderRadius: 100,
    overflow: "hidden",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#008080",
  },
  nametext: {
    fontFamily: "RB",
    fontSize: rf(11),
    color: "#000000",
  },
  posttime: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  iconwrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconbody: {
    height: hp("3%"),
    width: hp("3%"),
    borderRadius: 100,
    overflow: "hidden",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  datetext: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  Postimage: {
    height: hp("55%"),
    width: wp("90%"),
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  LocationDetailsBody: {
    height: hp("4%"),
    width: wp("80%"),
    alignSelf: "center",
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  AEDbody: {
    flex: 0.3,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "RB",
    fontSize: rf(11),
    color: "#fff",
  },
  iconbodyvector: {
    alignSelf: "flex-end",
    height: hp("4%"),
    width: hp("4%"),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  otherpicturesofpostbody: {
    height: hp("5%"),
    width: hp("5%"),
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  comenttext: {
    fontFamily: "RM",
    fontSize: rf(10),
    color: "#565656",
    marginVertical: 1,
  },
  sharingoptionsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 5,
    justifyContent: "space-between",
  },
  likestext: {
    fontFamily: "RM",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  sharinginnderwrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.3,
    justifyContent: "space-between",
  },
  saveplannerbtn: {
    height: hp("4%"),
    width: wp("25%"),
    backgroundColor: "#008080",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontFamily: "RBB",
    fontSize: rf(9),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(PlannerPost);
