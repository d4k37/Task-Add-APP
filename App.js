import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';

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
     <ScrollView>
       {todoList.map(todo => 
       <View
       key={todo}
       style={styles.todoItem}
       ><Text>{todo}</Text></View>)}
     </ScrollView>
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
  },
  todoItem:{
  marginTop: 10,
  padding: 20,
  backgroundColor: '#f2f2f2',
  borderRadius: 10,
  borderWidth: 1,
  borderColor: 'gray',
  },
});
