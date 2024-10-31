import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { postdata } from "../../Helper/DummyData";

const ExpendScreen = (props) => {
  const data = props?.route?.params;
  const [pictureitem, setPictureItem] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        {/* header here */}
        <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
          <Ionicons name="chevron-back" size={hp("3%")} color="#565656" />
        </TouchableOpacity>
        <View style={styles.textwrapper}>
          <Text style={styles.hometext}>HOME</Text>
        </View>
      </View>
      {/* ends here */}
      {/* main enlarged image view */}
      <ImageBackground source={data?.image} style={styles.expendedviewbody}>
        <View style={styles.innderBody}>
          {postdata.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setPictureItem(true)}
                style={styles.otherpicturesofpost}
              >
                <Image
                  source={item?.image}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
      {/*image view ends here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    height: hp("8%"),
    paddingHorizontal: wp("5%"),
  },
  textwrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.95,
  },
  hometext: {
    fontFamily: "RM",
    fontSize: rf(16),
    color: "#565656",
  },
  expendedviewbody: {
    flex: 0.95,
    width: wp("90%"),
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  otherpicturesofpost: {
    height: hp("6%"),
    width: hp("6%"),
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "flex-end",
    margin: 7,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  innderBody: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(ExpendScreen);
