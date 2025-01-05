import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";

interface LostItem {
  id: string;
  title: string;
  location: string;
  description: string;
  reward: string;
  imageUrl: string;
}

interface LostItemsListProps {
  items: LostItem[];
  onCall: (id: string) => void; // Callback for "Call" button
  onMessage: (id: string) => void; // Callback for "Message" button
}

const LostItemsList: React.FC<LostItemsListProps> = ({ items, onCall, onMessage }) => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Card
          key={item.id}
          image={{ uri: item.imageUrl }}
          title={item.title}
          description={item.description}
          location={item.location}
          dateLost="2024-12-20" // Placeholder or dynamic value
          reward={item.reward}
          sharedBy="John Doe" // Default shared by value
          sharedTime="5 minutes ago" // Placeholder shared time
          onCall={() => onCall(item.id)} // Pass item ID to handler
          onMessage={() => onMessage(item.id)} // Pass item ID to handler
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

export default LostItemsList;
