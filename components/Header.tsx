import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; 

const Header: React.FC = () => (
  <View style={styles.header}>
    <View style={styles.logoContainer}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.headerTitle}>FindMe</Text>
    </View>
    <View style={styles.headerIcons}>
      <Ionicons name="notifications-outline" size={24} color="#333" style={styles.icon} />
      <Ionicons name="mail-outline" size={24} color="#333" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 16,
  },
});

export default Header;
