import { View, Text, StyleSheet, Pressable, Button, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 


// const TaskItem= (props) => {
//     return (
//       <View>
//         <Text style={styles.taskItem}>
//               {props.index +1} : {props.item}
//           </Text> 
//       </View>
//     )
//   }

const TaskItem= ({item, index, deleteTask}) => {
  return (
    <View style={styles.taskItem}>
      <Text>
        {index +1} : {item.task}  
      </Text>
      <Pressable style={styles.delete} onPress={deleteTask.bind(this, item.id)}>
        <Entypo name="trash" size={24} color="black" />
        
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    taskItem:{
        margin:10,
        padding:20,
        borderRadius:20,
        flexDirection:"row",
        backgroundColor:"green",
        color: "white",
    },
    delete:{
      flex: 1,
      justifyContent: "center",
    },
})

export default TaskItem