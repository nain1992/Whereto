import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import {} from "react-native";

const Selectuserfornewmassege = (props) => {
  const { item, onPress, isselected, index } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.userprofilepicture}>
        <Image
          source={item?.image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.namewrapper}>
        <Text style={styles.username}>{item?.name}</Text>
        <Text style={styles.newmsgs}>{item?.newmsg}</Text>
      </View>
      <TouchableOpacity
        onPress={props?.onIconpress}
        style={styles.seelctionbox}
      >
        {isselected ? (
          <View style={styles.seelctionbox}>
            <Image
              source={require("../../../assets/tick.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        ) : (
          <View style={styles.seelctionbox}></View>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    marginVertical: 5,
  },
  userprofilepicture: {
    height: hp("6%"),
    width: hp("6%"),
    overflow: "hidden",
    borderRadius: 100,
  },
  namewrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  username: {
    fontFamily: "RM",
    fontSize: rf(12),
    color: "#0D0D0D",
  },
  newmsgs: {
    fontFamily: "RM",
    fontSize: rf(9),
    color: "#B0B0B0",
  },
  seelctionbox: {
    height: 15,
    width: 15,
    overflow: "hidden",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Selectuserfornewmassege);
