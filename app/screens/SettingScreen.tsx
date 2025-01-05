import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons
          name={Platform.OS === "ios" ? "chevron-back" : "arrow-back-outline"}
          size={24}
          color="#4B5563"
        />
      </TouchableOpacity>

      {/* Settings Options */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.optionText}>Name, Email, Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.optionText}>Change your current password</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Notification Settings</Text>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.optionText}>New Contracts Sign or Send</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>General</Text>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.optionText}>Rate & Review Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.optionText}>Share Your Thoughts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.optionText}>Generate Lorem Ipsum Place</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  backButton: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  content: {
    flex: 1, // Ensures the content takes up all available space
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginTop: 16,
    marginBottom: 8,
  },
  settingOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  optionText: {
    fontSize: 16,
    color: "#4B5563",
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 55, // Add spacing from the bottom (safe area)
  },
  logoutText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default SettingsScreen;
 