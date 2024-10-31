import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import * as MediaLibrary from "expo-media-library";
import { AntDesign } from "@expo/vector-icons";
import { Camera, FlashMode } from "expo-camera";

const Chat = (props) => {
  const [type, setType] = useState("back"); // Using "back" as default type
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  const [flashMode, setFlashMode] = useState(FlashMode.off);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      if (
        cameraPermission.status !== "granted" ||
        mediaLibraryPermission.status !== "granted"
      ) {
        console.log("Camera permissions not granted");
      }
    })();
  }, []);

  const takePic = async () => {
    const options = { quality: 1, base64: true, exif: false };
    const newPhoto = await cameraRef.current?.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (!permission || !permission.granted) {
    return (
      <View style={styles.container1}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    setType((current) => (current === "back" ? "front" : "back"));
  };

  const toggleFlashMode = () => {
    setFlashMode((current) =>
      current === FlashMode.on ? FlashMode.off : FlashMode.on
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#222" />
      {photo ? (
        <ImageBackground
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
          style={{ height: "100%", width: "100%" }}
        >
          <TouchableOpacity
            onPress={() => setPhoto(null)}
            style={styles.savebtn}
          >
            <AntDesign name="download" size={hp("2%")} color="#fff" />
          </TouchableOpacity>
        </ImageBackground>
      ) : (
        <Camera
          style={styles.camera}
          flashMode={flashMode}
          type={type}
          ref={cameraRef}
        />
      )}

      {/* Buttons */}
      <View style={styles.btnwrapper}>
        <TouchableOpacity onPress={takePic} style={styles.takepicbtn} />
        <TouchableOpacity onPress={toggleCameraType} style={styles.retaketn}>
          <Text style={styles.retakebtntext}>Switch Camera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  camera: { flex: 0.75 },
  btnwrapper: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  takepicbtn: {
    height: hp("10%"),
    width: hp("10%"),
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#008080",
  },
  retaketn: {
    height: hp("6%"),
    width: wp("35%"),
    borderWidth: 1,
    borderColor: "#B0B0B0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  retakebtntext: {
    fontSize: rf(12),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Chat);
