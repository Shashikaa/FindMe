import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";

interface FoundItem {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
}

interface FoundItemsListProps {
  items: FoundItem[];
}

const FoundItemsList: React.FC<FoundItemsListProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Card
          key={item.id}
          image={{ uri: item.imageUrl }}
          title={item.title}
          description={item.description}
          location={item.location}
          dateLost="N/A" // Placeholder if not applicable
          reward="N/A" // Placeholder if not applicable
          sharedBy="Anonymous" // Default value for "shared by"
          sharedTime="Just Now" // Default shared time
          onCall={() => alert(`Call action for ${item.title}`)}
          onMessage={() => alert(`Message action for ${item.title}`)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default FoundItemsList;
