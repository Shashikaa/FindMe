import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./type"; 

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface NavBarProps {
  activeTab: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeTab }) => {
  const navigation = useNavigation<NavigationProp>(); // Use the typed navigation

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons
          name="home"
          size={24}
          color={activeTab === "Home" ? "#7C3AED" : "#4B5563"}
        />
        <Text
          style={[styles.navText, activeTab === "Home" && styles.activeNavText]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Search")}
      >
        <Ionicons
          name="search"
          size={24}
          color={activeTab === "Search" ? "#7C3AED" : "#4B5563"}
        />
        <Text
          style={[styles.navText, activeTab === "Search" && styles.activeNavText]}
        >
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddScreen")}
      >
        <Ionicons
          name="add-circle"
          size={48}
          color={activeTab === "AddScreen" ? "#7C3AED" : "#4B5563"}
        />
        <Text
          style={[styles.navText, activeTab === "AddScreen" && styles.activeNavText]}
        >
          Add
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Devices")}
      >
        <MaterialIcons
          name="devices-other"
          size={24}
          color={activeTab === "Devices" ? "#7C3AED" : "#4B5563"}
        />
        <Text
          style={[styles.navText, activeTab === "Devices" && styles.activeNavText]}
        >
          Devices
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons
          name="person"
          size={24}
          color={activeTab === "Profile" ? "#7C3AED" : "#4B5563"}
        />
        <Text
          style={[styles.navText, activeTab === "Profile" && styles.activeNavText]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#4B5563",
    marginTop: 4,
  },
  activeNavText: {
    color: "#7C3AED",
  },
  addButton: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default NavBar;
