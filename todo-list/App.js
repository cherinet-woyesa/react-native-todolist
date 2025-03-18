import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.listInfoContainer}>
        <Text style={styles.listInfoText,styles.dos}>you have {todos.length} Todos</Text>
      </View>
      <View style={styles.listContainer}>
        {todos.map((todo, index) => (
          <View key={index} style={styles.listItemContainer}>
            <Text style={styles.listItemText}>{todo}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => handleDeleteTodo(index)}>
              <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Enter item ..."
          onSubmitEditing={handleAddTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center',
  },
   dos: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    marginBottom: 20,
  },
  listInfoContainer: {
    marginBottom: 20,
  },
  listInfoText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  listContainer: {
    marginBottom: 20,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    color:'black',
    fontWeight:'bold',
    fontStyle:'italic'
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
    textAlign:'center',
    marginLeft: 10,
  },
  removeButtonText: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'green',
    borderWidth: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontWeight:'bold'
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: 'black',
    fontWeight:'bold',
    fontSize: 16,
  },
});