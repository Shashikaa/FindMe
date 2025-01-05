import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { launchImageLibrary, ImageLibraryOptions } from "react-native-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Import SafeAreaInsets

const AddScreen: React.FC = () => {
  const insets = useSafeAreaInsets(); // Get Safe Area Insets for dynamic padding

  const [itemType, setItemType] = useState<"Lost" | "Found">("Lost");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    const options: ImageLibraryOptions = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        Alert.alert("Error", response.errorMessage || "Image selection failed");
      } else if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri || null);
      }
    });
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate((prevDate) =>
        new Date(selectedDate.setHours(prevDate.getHours(), prevDate.getMinutes()))
      );
    }
  };

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setDate((prevDate) =>
        new Date(prevDate.setHours(selectedTime.getHours(), selectedTime.getMinutes()))
      );
    }
  };

  const handleSubmit = () => {
    if (!itemName || !category || !description || !location || !phoneNumber || !image) {
      Alert.alert("Validation Error", "Please fill all the fields and upload an image.");
      return;
    }
    console.log({
      itemType,
      itemName,
      category,
      description,
      location,
      phoneNumber,
      date,
      image,
    });
    Alert.alert("Success", "Your post has been submitted.");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]} // Adjust padding based on safe area
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <Text style={styles.title}>Create New Post</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            onPress={() => setItemType("Lost")}
            style={[styles.toggleButton, itemType === "Lost" && styles.activeToggleButton]}
          >
            <Text style={itemType === "Lost" ? styles.activeToggleText : styles.toggleText}>
              Lost Item
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setItemType("Found")}
            style={[styles.toggleButton, itemType === "Found" && styles.activeToggleButton]}
          >
            <Text style={itemType === "Found" ? styles.activeToggleText : styles.toggleText}>
              Found Item
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Item Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <View style={styles.datePickerContainer}>
          <Text style={styles.label}>Lost Date & Time</Text>
          <View style={styles.dateTimeRow}>
            <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
              <Text style={styles.dateButtonText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateButton} onPress={() => setShowTimePicker(true)}>
              <Text style={styles.dateButtonText}>
                {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </Text>
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              value={date}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}
        </View>
        <View style={styles.uploadContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <TouchableOpacity style={styles.uploadBox} onPress={handleImageUpload}>
              <Text style={styles.uploadText}>Upload Item Image</Text>
              <Text style={styles.uploadHint}>Attach file. File size should not exceed 10MB.</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    backgroundColor: "#F9F9F9",
  },
  activeToggleButton: {
    backgroundColor: "#6200EA",
  },
  toggleText: {
    color: "#000",
  },
  activeToggleText: {
    color: "#FFF",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  datePickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dateTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 4,
    backgroundColor: "#F9F9F9",
  },
  dateButtonText: {
    fontSize: 16,
    color: "#333",
  },
  uploadContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  previewImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  uploadBox: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 10,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6200EA",
  },
  uploadHint: {
    fontSize: 12,
    color: "#888",
  },
  submitButton: {
    backgroundColor: "#6200EA",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddScreen;
