import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface SearchInputProps {
  placeholder: string;
  onChange: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
  },
});

export default SearchInput;
