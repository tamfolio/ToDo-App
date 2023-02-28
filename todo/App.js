import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header.js'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Liverpool win', key: "1"},
    {text: 'Chelsea win', key: "2"},
    {text: 'Mancity win', key: "3"},
  ])
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header/>
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
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
