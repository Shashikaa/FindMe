import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Import the SafeArea hook
import { StatusBar } from "react-native";

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const insets = useSafeAreaInsets(); // Get safe area insets for dynamic padding

  const posts = [
    {
      id: "1",
      title: "Dell Inspiron 15",
      location: "Coffee House on 5th Avenue",
      description: "A 15.6-inch Dell Inspiron laptop in a black carrying case. See more...",
      reward: "$100 for safe return.",
      dateLost: "2024-12-20",
      imageUrl: "https://via.placeholder.com/200x200.png?text=Lost+Item",
    },
    // Add more posts as needed
  ];



  const renderPost = ({ item }: any) => (
    <View style={styles.postCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <View style={styles.postDetails}>
        <Text style={styles.postTitle}>Item Name: {item.title}</Text>
        <Text style={styles.postText}>Location: {item.location}</Text>
        <Text style={styles.postText}>Description: {item.description}</Text>
        <Text style={styles.postText}>Reward: {item.reward}</Text>
        <Text style={styles.postText}>Date Lost: {item.dateLost}</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/100x100.png?text=Avatar" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>S. Kevin</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SettingScreen")} style={styles.settingsIcon}>
          <Ionicons name="settings-outline" size={24} color="#4B5563" />
        </TouchableOpacity>
      </View>

      {/* Posts */}
      <Text style={styles.postsTitle}>Posts</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[styles.postsContainer, { paddingBottom: 100 }]} // Add extra bottom padding
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    padding: 16,
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  settingsIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 8,
  },
  postsContainer: {
    paddingHorizontal: 16,
  },
  postCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
  },
  postImage: {
    width: "100%",
    height: 150,
  },
  postDetails: {
    padding: 12,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  postText: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 4,
  },
});

export default ProfileScreen;
