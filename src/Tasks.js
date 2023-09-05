import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, {useState} from 'react'
import TaskItem from './components/TaskItem'
import AddTask from './components/AddTask'

const Tasks = () => {
    
    const [taskList, setTaskList] = useState([])
    const [showModal, setShowModal] = useState(false)

    const hideModal = ()=>{
        setShowModal(false)
    }

    const displayModal = ()=>{
        setShowModal(true)
    }

    const handleAddTskButton = (task, setTask)=>{
        setTaskList((prevTasks)=>(
            [...prevTasks, {task:task, id: prevTasks.length.toString()}]
        ))
        //alert("Task Added!")
        setTask("")
        hideModal()
    }

    const deleteTask = (id) => {
        setTaskList((prevTasks) => prevTasks.filter((t) => t.id !== id));
    };
    
  return (
    <View style = {styles.container}>
        {showModal && ( <AddTask handleAddTskButton={handleAddTskButton} hideModal={hideModal}/> )}
        <Button title='ADD TASK' onPress={displayModal}></Button>

      <View>
        <Text style={styles.Border}></Text>
        {taskList.length > 0 ? (
            <Text style={styles.textTitle}>Your Tasks : </Text>
        ) : (
            <Text style={styles.textTitle}>No Tasks as of Now.</Text>
        )}
        
        <FlatList 
            data = {taskList}
            renderItem={({item, index})=> {
                return (
                    <TaskItem item={item} index={index} deleteTask={deleteTask}/>
                )
            }}
            keyExtractor={(item, index)=>{ return index}}
        />
        <View >
            {/* <ScrollView>
                
                {taskList?.map((taskItem, index)=>(
                    <Text key={index} style={styles.taskItem}>{taskItem}</Text>
                ))}
            </ScrollView> */}
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        padding: 15,
    },
    textTitle:{
        marginTop: 10,
        color: "blue",
        fontSize: 26,
        fontWeight:"bold",
    },
    Border:{
        borderBottomWidth: 1,
        color: "#CCCCCC",
    },
})

export default Tasks