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
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { shareusers } from "../../../Helper/DummyData";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ShareModel = (props) => {
  const { item } = props;
  const [sendicon, setSendicon] = useState();

  const _handleSend = (item, index) => {
    setSendicon(index);
  };
  return (
    <Modal transparent={true} animationType="fade">
      <Pressable
        onPress={props?.onPress}
        style={{ flex: 1, backgroundColor: "#00000aaa" }}
      ></Pressable>

      <View style={styles.container}>
        <View style={styles.headerbody}>
          <View style={styles.titleheader}>
            <Text style={styles.titletext}>SHARE</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {shareusers.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => _handleSend(item, index)}
                style={styles.userwrapper}
              >
                <View style={styles.picbpdy}>
                  <Image
                    source={item?.image}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="cover"
                  />
                </View>
                <View style={{ flex: 1, padding: 10 }}>
                  <Text style={styles.username}>{item?.name}</Text>
                  <Text style={styles.userinfo}>{item?.info}</Text>
                </View>
                <View style={styles.iconbody}>
                  <Image
                    source={
                      sendicon === index
                        ? require("../../../assets/tick.png")
                        : require("../../../assets/Ellipse1.png")
                    }
                    style={{ height: "70%", width: "70%" }}
                    resizeMode="cover"
                  />
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.selecteduserwrapper}>
          <View style={styles.selectedbody}>
            <View style={styles.selectedusernames}>
              <Text style={styles.selectedusername}>Blue Ocean</Text>
            </View>
            <TouchableOpacity style={styles.sendbtn}>
              <MaterialCommunityIcons
                name="share-outline"
                size={hp("4")}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
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
    bottom: 0,
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
    borderWidth: 1.5,
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
    fontSize: rf(11),
    color: "#0D0D0D",
  },
  userinfo: {
    fontFamily: "RM",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  selecteduserwrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedbody: {
    height: hp("8%"),
    width: wp("90%"),
    borderRadius: 100,
    backgroundColor: "#F5F5F5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  selectedusernames: {
    paddingLeft: wp("2%"),
  },
  sendbtn: {
    height: hp("8%"),
    width: hp("8%"),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008080",
  },
  selectedusername: {
    fontFamily: "RM",
    fontSize: rf(11),
    color: "#008080",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(ShareModel);
