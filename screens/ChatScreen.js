import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const ChatScreen = ({ navigation, route }) => {
  //set screen header options
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri:
                "https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png",
            }}
          />
          <Text style={styles.textStyle}>{route.params.chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView>{/* Chat goes here */}</ScrollView>
          <View style={styles.footer}>
            <TextInput placeholder="Signal Message" style={styles.textInput} />
          </View>
        </>
      </KeyboardAvoidingView>

      {/* <Text>{route.params.chatName}</Text> */}
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    marginLeft: 10,
    fontWeight: "700",
  },
  container: {},
  footer: {},
  textInput: {},
});
