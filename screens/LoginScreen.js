import React, { useState, useEffect } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { auth, db } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //gives us back authUser object
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //console.log(authUser);
      if (authUser) {
        //if user authenticated go to Home screen
        //navigation.replace - don't allow user to swipe back to Login screen
        navigation.replace("Home");
      }
    });

    //clean up function
    return () => {
      unsubscribe();
    };
  }, []); //Run one time on component mounting

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button style={styles.button} onPress={signIn} title="login" />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
        type="outline"
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, //take up entire height
    alignItems: "center", //horizontally center elements
    justifyContent: "center", //vertically center elements
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
