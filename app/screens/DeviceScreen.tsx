import React from "react";
import {
  View,
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const devices = [
  {
    id: "1",
    name: "Smart Keychain",
    status: "Active",
    battery: "85%",
    location: "Near Central Park",
  },
  {
    id: "2",
    name: "Phone Tracker",
    status: "Inactive",
    battery: "N/A",
    location: "N/A",
  },
];

const DevicesScreen = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();

  const handleTrack = (deviceId: string) => {
    navigation.navigate("Tracking", { deviceId });
  };

  const renderDeviceCard = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.deviceName}>
        {item.name} {item.status === "Active" ? "🟢" : "🔴"}
      </Text>
      <Text style={styles.deviceDetail}>Status: {item.status}</Text>
      <Text style={styles.deviceDetail}>Battery: {item.battery}</Text>
      <Text style={styles.deviceDetail}>Last Seen: {item.location}</Text>
      <TouchableOpacity
        style={styles.trackButton}
        onPress={() => handleTrack(item.id)}
      >
        <Text style={styles.trackButtonText}>➜ Track</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Devices</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter device name/id"
        placeholderTextColor="#999"
      />

      {/* Device List */}
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={renderDeviceCard}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
 
    marginBottom: 10,
    borderRadius: 8,

  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  searchBar: {
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  flatListContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  deviceDetail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  trackButton: {
    marginTop: 10,
    backgroundColor: "#000",
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  trackButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default DevicesScreen;
