import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Liverpool win', key: "1"},
    {text: 'Chelsea win', key: "2"},
    {text: 'Mancity win', key: "3"},
  ])
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.content}>
        {/* TODO Form */}
        <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <Text>{item.text}</Text>
            )}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
