import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TextInput } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import Task from './components/Tasks';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask =() => {
    if(task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("")
    }
  }

  const deleteTask = (index) => {
    console.log("deleting.......")
    const newTasks =  [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>To-Do List</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={task}
          onChangeText={(text) => setTask(text)}/>

        <FontAwesome5
          name="plus"
          size={24}
          color="green"
          onPress={addTask}
          />
      </View>

      <FlatList
      data={tasks}
      renderItem={({item, index}) => (
        <Task
          text={item}
          onDelete={() => deleteTask(index)}
          />)
      } 
      keyExtractor={({item, index}) => index}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    marginTop: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  tasks: {
    marginTop: 30,
  }
});
