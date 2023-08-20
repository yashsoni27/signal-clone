import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons"
import { db } from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db.collection('chats').add({
        chatName: input
    }).then(() => {
        navigation.goBack()
    }).catch(error => alert(error))
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={                      
            <Ionicons name="chatbubble" size={24} />
        }
      />
      <Button onPress={createChat} title='Create new Chat'> </Button>
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    height: '100%'
  },
});
