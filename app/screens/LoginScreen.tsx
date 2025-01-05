import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import SocialButton from "../../components/SocialButton";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Home");
    }, 2000);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/original.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome to FindMe</Text>
          <SocialButton
            iconName={require("../../assets/images/google.png")}
            text="Login with Google"
            onPress={() => console.log("Login with Google")}
          />
          <SocialButton
            iconName={require("../../assets/images/logo-facebook.png")}
            text="Login with Facebook"
            onPress={() => console.log("Login with Facebook")}
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
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          {isLoading ? (
            <ActivityIndicator size="large" color="#007BFF" />
          ) : (
            <Button text="Sign In" onPress={() => navigation.navigate("Main")} />

          )}
          <View style={styles.footer}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerText}> Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  forgotPassword: {
    textAlign: "right",
    color: "#007BFF",
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default LoginScreen;
