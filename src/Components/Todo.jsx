import React from "react";
import { Heading, Text, GridItem, Button } from "@chakra-ui/react";
import { deleteTask } from "../redux/taskReducer/action";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Todo = (el) => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  };
  return (
    <GridItem>
      <Heading w="100%" h="10">
        {el.title}
      </Heading>
      <Text w="100%" h="10">
        {el.desc}
      </Text>
      <Button border={"1px solid purple"} gap={3} mx={2} color={'purple.900'} onClick={() => handleDelete(el._id)}>Delete</Button>
      <Button  border={"1px solid purple"} gap={3} mx={2} color={'purple.900'} onClick={() => handleEdit(el._id)}>Edit</Button>

      {/* <Link to={`edit/${el._id}`}><Button >Edit</Button></Link> */}
    </GridItem>
  );
};

export default Todo;
/*  <Button onClick={handleDelete(el._id)} bgColor={"white"}>Delete</Button>
 <Link to={"edit/1`"}><Button >Edit</Button></Link> */
