import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const CommentModel = (props) => {
  const { item } = props;
  const [heart, setHeart] = useState();

  return (
    <Modal transparent={true} animationType="fade">
      <Pressable
        onPress={props?.onPress}
        style={{ flex: 1, backgroundColor: "#00000aaa" }}
      ></Pressable>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerbody}>
            <View style={styles.titleheader}>
              <Text style={styles.titletext}>COMMENT</Text>
            </View>
          </View>

          <View style={styles.userwrapper}>
            <View style={styles.picbpdy}>
              <Image
                source={require("../../../assets/Food.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.username}>Muthana Hasan</Text>
              <Text style={styles.userinfo}>i love you anas</Text>
              <View style={styles.comentinfowrapper}>
                <Text style={styles.hourstext}>18 Hr</Text>
                <Text style={styles.hourstext}>Reply</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setHeart(!heart)}
              style={styles.iconbody}
            >
              {heart ? (
                <AntDesign name="heart" size={hp("2%")} color="red" />
              ) : (
                <AntDesign name="hearto" size={hp("2%")} color="#B0B0B0" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.userwrapper}>
            <View style={styles.picbpdy}>
              <Image
                source={require("../../../assets/Food.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.username}>Muthana Hasan</Text>
              <Text style={styles.userinfo}>i love you anas</Text>
              <View style={styles.comentinfowrapper}>
                <Text style={styles.hourstext}>18 Hr</Text>
                <Text style={styles.hourstext}>Reply</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setHeart(!heart)}
              style={styles.iconbody}
            >
              {heart ? (
                <AntDesign name="heart" size={hp("2%")} color="red" />
              ) : (
                <AntDesign name="hearto" size={hp("2%")} color="#B0B0B0" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.userwrapper}>
            <View style={styles.picbpdy}>
              <Image
                source={require("../../../assets/Food.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.username}>Muthana Hasan</Text>
              <Text style={styles.userinfo}>i love you anas</Text>
              <View style={styles.comentinfowrapper}>
                <Text style={styles.hourstext}>18 Hr</Text>
                <Text style={styles.hourstext}>Reply</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setHeart(!heart)}
              style={styles.iconbody}
            >
              {heart ? (
                <AntDesign name="heart" size={hp("2%")} color="red" />
              ) : (
                <AntDesign name="hearto" size={hp("2%")} color="#B0B0B0" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.userwrapper}>
            <View style={styles.picbpdy}>
              <Image
                source={require("../../../assets/Food.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.username}>Muthana Hasan</Text>
              <Text style={styles.userinfo}>i love you anas</Text>
              <View style={styles.comentinfowrapper}>
                <Text style={styles.hourstext}>18 Hr</Text>
                <Text style={styles.hourstext}>Reply</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setHeart(!heart)}
              style={styles.iconbody}
            >
              {heart ? (
                <AntDesign name="heart" size={hp("2%")} color="red" />
              ) : (
                <AntDesign name="hearto" size={hp("2%")} color="#B0B0B0" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.userwrapper}>
            <View style={styles.picbpdy}>
              <Image
                source={require("../../../assets/Food.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.username}>Muthana Hasan</Text>
              <Text style={styles.userinfo}>i love you anas</Text>
              <View style={styles.comentinfowrapper}>
                <Text style={styles.hourstext}>18 Hr</Text>
                <Text style={styles.hourstext}>Reply</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setHeart(!heart)}
              style={styles.iconbody}
            >
              {heart ? (
                <AntDesign name="heart" size={hp("2%")} color="red" />
              ) : (
                <AntDesign name="hearto" size={hp("2%")} color="#B0B0B0" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.userwrapper}>
            <View style={styles.picbpdy}>
              <Image
                source={require("../../../assets/Food.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.username}>Muthana Hasan</Text>
              <Text style={styles.userinfo}>i love you anas</Text>
              <View style={styles.comentinfowrapper}>
                <Text style={styles.hourstext}>18 Hr</Text>
                <Text style={styles.hourstext}>Reply</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setHeart(!heart)}
              style={styles.iconbody}
            >
              {heart ? (
                <AntDesign name="heart" size={hp("2%")} color="red" />
              ) : (
                <AntDesign name="hearto" size={hp("2%")} color="#B0B0B0" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.userwrapper}>
            <View style={styles.picbpdy}>
              <Image
                source={require("../../../assets/Food.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.username}>Muthana Hasan</Text>
              <Text style={styles.userinfo}>i love you anas</Text>
              <View style={styles.comentinfowrapper}>
                <Text style={styles.hourstext}>18 Hr</Text>
                <Text style={styles.hourstext}>Reply</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setHeart(!heart)}
              style={styles.iconbody}
            >
              {heart ? (
                <AntDesign name="heart" size={hp("2%")} color="red" />
              ) : (
                <AntDesign name="hearto" size={hp("2%")} color="#B0B0B0" />
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* <KeyboardAvoidingScrollView showsVerticalScrollIndicator={false}> */}

        {/* </KeyboardAvoidingScrollView> */}
      </View>
      <View style={styles.selecteduserwrapper}>
        <View style={styles.picbpdy}>
          <Image
            source={require("../../../assets/Food.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.comentbody}>
          <TextInput
            style={styles.inputstyles}
            placeholder="Write your thoughts here"
            multiline={true}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("60%"),
    width: wp("100%"),
    position: "absolute",
    top: hp("40%"),
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 15,
  },
  headerbody: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleheader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titletext: {
    fontFamily: "RB",
    fontSize: rf(14),
    color: "#565656",
  },
  userwrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 1,
  },
  picbpdy: {
    height: hp("5%"),
    width: hp("5%"),
    overflow: "hidden",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#008080",
  },
  iconbody: {
    height: hp("3%"),
    width: hp("3%"),
    overflow: "hidden",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontFamily: "RM",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  userinfo: {
    fontFamily: "RM",
    fontSize: rf(11),
    color: "#0D0D0D",
    marginBottom: 8,
  },
  selecteduserwrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
  },
  comentbody: {
    height: hp("6%"),
    width: wp("75%"),
    paddingLeft: 10,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputstyles: {
    fontFamily: "RR",
    fontSize: rf(11),
    height: "100%",
    color: "#000000",
    width: "100%",
  },
  comentinfowrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  hourstext: {
    fontFamily: "RM",
    fontSize: rf(9),
    color: "#B0B0B0",
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(CommentModel);
