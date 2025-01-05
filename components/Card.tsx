import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CardProps {
  image: any;
  title: string;
  description: string;
  location: string;
  dateLost: string;
  reward: string;
  sharedBy: string;  
  sharedTime: string; 
  onCall: () => void;
  onMessage: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  location,
  dateLost,
  reward,
  sharedBy,
  sharedTime,
  onCall,
  onMessage
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.card}>
      {/* Header with sharedBy and sharedTime */}
      <View style={styles.cardHeader}>
        <View style={styles.sharedInfo}>
          <Text style={styles.sharedByText}>{sharedBy}</Text>
          <Text style={styles.sharedTimeText}>{sharedTime}</Text>
        </View>
        <TouchableOpacity onPress={toggleModal} style={styles.dotsIcon}>
          <Ionicons name="ellipsis-vertical" size={20} color="#4B5563" />
        </TouchableOpacity>
      </View>

      {/* Card Image */}
      <Image source={image} style={styles.cardImage} />

      {/* Card Content */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Text style={styles.cardLocation}>Location: {location}</Text>
        <Text style={styles.cardDate}>Date Lost: {dateLost}</Text>
        <Text style={styles.cardReward}>Reward: {reward}</Text>

        {/* Action Buttons */}
        <View style={styles.cardActions}>
          <TouchableOpacity style={styles.callButton} onPress={onCall}>
            <Text style={styles.actionText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton} onPress={onMessage}>
            <Text style={styles.actionText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for options */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={toggleModal}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => alert("Share option clicked")}>
              <Text style={styles.modalOption}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Report option clicked")}>
              <Text style={styles.modalOption}>Report this post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Get notified option clicked")}>
              <Text style={styles.modalOption}>Get notified about this post</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width:  '100%',
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center",
  },
  sharedInfo: {
    flexDirection: "column",  // Stack name and time vertically
    justifyContent: "center",
  },
  sharedByText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  sharedTimeText: {
    fontSize: 12,
    color: "#777",
  },
  dotsIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  cardLocation: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },
  cardReward: {
    fontSize: 12,
    color: "#4CAF50",
    marginBottom: 8,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  callButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  messageButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  actionText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    width: "80%",
  },
  modalOption: {
    fontSize: 16,
    paddingVertical: 12,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
});

export default Card;
