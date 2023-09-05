import { View, Button, TextInput, StyleSheet, Alert, Modal } from 'react-native'
import React, {useState} from 'react'

const AddTask = ({handleAddTskButton, hideModal}) => {
    const [task, setTask] = useState('')
    const handleInputValue =(inputTask) => {
        setTask(inputTask)
    }
    const addTask = ()=>{
        if(!task)
            return Alert.alert("Please Add a Task")
        handleAddTskButton(task, setTask)
    }
  return (
    <Modal animationType = "slide">
        <View style = {styles.inputContainer}>
            <TextInput onChangeText={handleInputValue} value={task} placeholder='Add your Tasks' style={styles.inputBox}/>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button onPress = {addTask} title="ADD TASK" />
                </View>
                <View style={styles.button}>
                    <Button onPress = {hideModal} title="CANCEL" />
                </View>
            </View>
            
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: "Column",
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 20,
    },
    inputBox:{
        width: '75%',
        borderWidth:1,
        borderColor:"#CCCCCC",
        borderRadius: 10,
        padding: 5,
        paddingLeft:15,
    },
    buttons:{
        flexDirection: "row",
    },
    button:{
        marginTop: 20,
        marginLeft:10,
        width: 130,
    }
})

export default AddTask