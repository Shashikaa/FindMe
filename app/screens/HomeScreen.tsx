import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import LostItemsList from "../../components/LostItemsList";
import FoundItemsList from "../../components/FoundItemsList";

const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"LostItems" | "FoundItems">("LostItems");
  const insets = useSafeAreaInsets();

  const lostItemsData = [
    {
      id: "1",
      title: "Dell Inspiron 15",
      location: "Coffee House on 5th Avenue",
      description: "A 15.6-inch Dell Inspiron laptop in a black carrying case. See more...",
      reward: "$100 for safe return.",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Lost+Item",
    },
    {
      id: "2",
      title: "Black Wallet",
      location: "Central Park Bench 12",
      description: "A leather wallet with personal IDs and credit cards.",
      reward: "$50 for safe return.",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Lost+Item",
    },
  ];

  const foundItemsData = [
    {
      id: "1",
      title: "MacBook Pro",
      location: "Starbucks on 7th Street",
      description: "A silver MacBook Pro in a black leather case. See more...",
      reward: "$150 for safe return.",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Found+Item",
    },
    {
      id: "2",
      title: "Keychain with Keys",
      location: "Gym Locker Room",
      description: "A set of keys on a blue keychain.",
      reward: "No reward specified.",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Found+Item",
    },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* Header */}
      <Header />

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "LostItems" && styles.activeTab]}
          onPress={() => setActiveTab("LostItems")}
        >
          <Text style={[styles.tabText, activeTab === "LostItems" && styles.activeTabText]}>
            Lost Items
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "FoundItems" && styles.activeTab]}
          onPress={() => setActiveTab("FoundItems")}
        >
          <Text style={[styles.tabText, activeTab === "FoundItems" && styles.activeTabText]}>
            Found Items
          </Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {activeTab === "LostItems" ? (
          <LostItemsList
            items={lostItemsData}
            onCall={(id: string) => console.log(`Call for item ID: ${id}`)}
            onMessage={(id: string) => console.log(`Message for item ID: ${id}`)}
          />
        ) : (
          <FoundItemsList items={foundItemsData} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#7C3AED",
  },
  tabText: {
    fontSize: 16,
    color: "#4B5563",
  },
  activeTabText: {
    color: "#7C3AED",
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Prevent overlap at the bottom
  },
});

export default HomeScreen;
