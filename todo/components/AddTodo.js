import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet, TextInput, Text, Button } from "react-native";

export default function AddTodo() {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput placeholder="New Todo...." style={styles.input} onChangeText={changeHandler} />
      <Button onPress={() => console.log(text)} title='add todo' color='coral'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})
