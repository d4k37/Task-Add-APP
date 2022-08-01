import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

              const [todoItem, setTodoItem] = useState('')
              const [todoList, setTodoList] = useState([])

              const addTodoList = () => {
                setTodoList([...todoList, todoItem])
                console.log(todoList);
              }

  return (
    <View style={styles.container}>
     <View>
       <TextInput 
       placeholder='Entre a task a se fazer'
       style={styles.textInput}
       onChangeText={text => setTodoItem(text)}
       value={todoItem}
       />
       <Button  
       title='Adicione a task'
       onPress={addTodoList}
       />
     </View>
     <View>
       <Text>Lista de tasks</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
  textInput:{
    padding: 10,
    borderColor: 'black',
    marginBottom: 10,
    borderWidth: 1
  }
});
