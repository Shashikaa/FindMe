import React, { useState } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import SocialButton from "../../components/SocialButton";

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    console.log("Register with:", email, password, confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/original.png")} style={styles.logo} />
      <Text style={styles.title}>Register to FindMe</Text>
      <SocialButton
        iconName={require("../../assets/images/google.png")}
        text="Sign up with Google"
        onPress={() => console.log("Sign up with Google")}
      />
      <SocialButton
        iconName={require("../../assets/images/logo-facebook.png")}
        text="Sign up with Facebook"
        onPress={() => console.log("Sign up with Facebook")}
      />
      <Text style={styles.orText}>or by email</Text>
      <InputField
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputField
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button text="Sign Up" onPress={handleRegister} />
      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0, 152, 255, 0.03)",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#a9a9a9",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
