import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Import the SafeArea hook
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";

interface Item {
  id: number;
  title: string;
  description: string;
  image: any; // Replace with ImageSourcePropType if using static images
}

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const insets = useSafeAreaInsets(); // Get safe area insets for dynamic padding

  const items: Item[] = [
    {
      id: 1,
      title: "Lost Laptop",
      description: "Black Dell laptop.",
      image: require("../../assets/images/Laptop.jpg"),
    },
    {
      id: 2,
      title: "Lost Wallet",
      description: "Brown leather wallet.",
      image: require("../../assets/images/Laptop.jpg"),
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <SearchInput
        placeholder="Search for items..."
        onChange={(text) => setQuery(text)}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            description={item.description}
            location={""}
            dateLost={""}
            reward={""}
            onCall={function (): void {
              throw new Error("Function not implemented.");
            }}
            onMessage={function (): void {
              throw new Error("Function not implemented.");
            }}
            sharedBy={""}
            sharedTime={""}
          />
        )}
        ListEmptyComponent={<Text>No items found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});

export default SearchScreen;
