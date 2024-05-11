import React, { useState } from 'react'
import {Stack,Heading,Input,Button,Grid,FormLabel} from '@chakra-ui/react'
import { getTasks, handlePatch } from '../redux/taskReducer/action';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
const navigate=useNavigate()
const dispatch=useDispatch()
const {id}= useParams()
const handleClick=()=>{
  const obj={title,desc}
  console.log('edit',obj);
dispatch(handlePatch(id,obj))
alert("Todo has been updated")
dispatch(getTasks)
navigate("/")
}
  return (
    <Stack w="60%" m="auto" padding={6}>
     <FormLabel padding={2}>Enter Title</FormLabel>
        <Input type="text" onChange={((e)=>setTitle(e.target.value))} value={title}></Input>
        <FormLabel  padding={2}>Enter Description</FormLabel>

        <Input type="text" p={2} value={desc} onChange={((e)=>setDesc(e.target.value))}></Input>
        <Button onClick={handleClick}>Update Todo</Button>

     </Stack>

    
  )
}

export default AddTodo