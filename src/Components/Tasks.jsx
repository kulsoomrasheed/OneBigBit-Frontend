import React, { memo, useEffect, useState } from "react";
import {Stack,Heading,Input,Button,Grid,FormLabel} from '@chakra-ui/react'
import {useDispatch, useSelector} from"react-redux"
import { getTasks, postTasks } from "../redux/taskReducer/action";
import Todo from "./Todo";
const Tasks = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

const dispatch=useDispatch()

const {tasks}= useSelector((store)=>store)
console.log(tasks);
useEffect(()=>{
dispatch(getTasks)
},[])
const handleClick=()=>{
    const obj={title,desc}
    console.log('yes',obj);
dispatch(postTasks(obj))
dispatch(getTasks)
}
  return (
    <Stack  bgColor="purple.900" color="white">
        <Heading margin={30}>Task Management App</Heading>
       <Stack w="85%" m="auto">
       <Stack w="60%" m="auto" padding={6}>
        <FormLabel padding={2}>Enter Title</FormLabel>
           <Input type="text" onChange={((e)=>setTitle(e.target.value))} value={title}></Input>
           <FormLabel  padding={2}>Enter Description</FormLabel>

           <Input type="text" p={2} value={desc} onChange={((e)=>setDesc(e.target.value))}></Input>
           <Button onClick={handleClick}>Add Todo</Button>

        </Stack>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
           {tasks && tasks.map((el,i)=>{
            return <Todo key={i} {...el}/>
        })}  
        </Grid>
       
       </Stack>
    </Stack>
  );
};

export default memo(Tasks);


