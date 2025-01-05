import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the back button

const TrackingScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -33.8688,
          longitude: 151.2093,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: -33.8688, longitude: 151.2093 }}
          title="Smart Keychain"
          description="Last Active: 1hr ago"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 40, // Adjust this based on your header size
    left: 10,
    zIndex: 1, // Ensures it stays on top of the map
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional, for a semi-transparent background
    borderRadius: 25,
    padding: 10,
  },
  map: {
    flex: 1,
  },
});

export default TrackingScreen;
