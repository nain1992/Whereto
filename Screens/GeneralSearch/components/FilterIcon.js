import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const FilterIcon = (props) => {
  const [showhidefilter, setShowhidefilter] = useState(false);
  return (
    <View style={styles.parent}>
      {showhidefilter ? (
        <View>
          <TouchableOpacity style={styles.filteroptions}>
            <Text style={styles.filtertext}>Relevant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filteroptions}>
            <Text style={styles.filtertext}>Popularity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filteroptions}>
            <Text style={styles.filtertext}>Most Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filteroptions}>
            <Text style={styles.filtertext}>Price (HIgh to Low)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filteroptions}>
            <Text style={styles.filtertext}>Price (Low to High)</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <TouchableOpacity
        onPress={() => setShowhidefilter(!showhidefilter)}
        style={styles.container}
      >
        {!showhidefilter ? (
          <MaterialCommunityIcons
            name="filter-outline"
            size={hp("3%")}
            color="#fff"
          />
        ) : (
          <AntDesign name="close" size={hp("3%")} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: hp("35%"),
    position: "absolute",
    right: 20,
    bottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },

  container: {
    height: hp("7%"),
    width: hp("7%"),
    borderRadius: 15,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    bottom: 0,
    position: "absolute",
  },
  filteroptions: {
    height: hp("5%"),
    width: wp("40%"),
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  filtertext: {
    fontFamily: "RBB",
    fontSize: rf(12),
    color: "#565656",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(FilterIcon);
