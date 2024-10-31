// ImageModal.js

import React from "react";
import { Modal, Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Imagemodel = ({ visible, imageUrl, onClose, imagelarge }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          {/* You can customize the close button */}
        </TouchableOpacity>
        <Image style={styles.image} source={imagelarge} resizeMode="contain" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    // You can customize the close button styles
  },
});

export default Imagemodel;
