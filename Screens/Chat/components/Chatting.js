import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Chat = (props) => {
  //   const data = props?.route?.params;
  const { item } = props;

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={styles.imagebody}>
          <Image
            source={item?.image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.msgwrapper}>
          <Text style={styles.sentmsg}>{item?.sendmsg}</Text>
        </View>
      </View>
      <View style={styles.recievemsg}>
        <Text style={styles.sentmsg}>{item?.recievemsg}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingHorizontal: wp("5%"),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagebody: {
    height: hp("5%"),
    width: hp("5%"),
    overflow: "hidden",
    borderRadius: 100,
    marginRight: 8,
    marginVertical: 2,
  },
  sentmsg: {
    fontFamily: "RM",
    fontSize: rf(11),
    color: "#161618",
  },
  msgwrapper: {
    padding: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    maxWidth: wp("80%"),
  },
  recievemsg: {
    padding: 10,
    backgroundColor: "#008080",
    borderRadius: 10,
    maxWidth: wp("80%"),
    alignSelf: "flex-end",
    marginVertical: 2,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Chat);
