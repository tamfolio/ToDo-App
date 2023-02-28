import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    {name: "Tamilore", key: "1"},
    {name: "Abigael", key: "2"},
    {name: "Feyisola", key: "3"},
    {name: "Ayobami", key: "4"},
    {name: "Tobi", key: "5"},
    {name: "Brown", key: "6"},
    {name: "Abayomi", key: "7"},
    {name: "Ayo", key: "8"},
  ]);

  const pressHandler = (id) => {
      console.log(id);
      // setPeople((prevPeople) => {
      //   return prevPeople.filter(person => person.id != id);
      // })
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView>
      {people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })} 
      </ScrollView>  */}
      <FlatList 
        data={people}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginEnd: 20
  }
});
