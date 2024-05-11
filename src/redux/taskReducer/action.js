import axios from "axios";
import { GET_TASK_SUCCESS, POST_TASK_SUCCESS, TASK_FAILURE, TASK_PENDING } from "./actionTypes";

export const getTasks=(dispatch)=>{
  
  console.log('line5');
    dispatch({type: TASK_PENDING})
    axios.get("http://localhost:4500/tasks").then((res)=>{
        dispatch({type:GET_TASK_SUCCESS,payload:res.data.tasks})
        console.log(res.data.tasks);

    }).catch((err)=>{
        dispatch({type:TASK_FAILURE})
        console.log(err.message);
    })
}

export const postTasks=(obj)=>(dispatch)=>{
  
    dispatch({type: TASK_PENDING})
console.log('lin24');
    axios
    .post("http://localhost:4500/tasks", obj)
    .then((res) => {

      console.log(res.data);
      dispatch({type:POST_TASK_SUCCESS})

    })
    .catch((err) => {
      console.log(err.message);
      dispatch({type:TASK_FAILURE})

    });
}

export const deleteTask=(_id)=>(dispatch)=>{
  
  dispatch({type:TASK_PENDING})
  axios.delete(`http://localhost:4500/tasks/delete/${_id}`).then((res)=>{
    console.log(res.data);
    dispatch({type:POST_TASK_SUCCESS})
    dispatch(getTasks)

  }).catch((err)=>{
    console.log(err.message);
    dispatch({type:TASK_FAILURE})

  })
}

export const handlePatch = (id, obj)=>(dispatch) => {

  dispatch({type: TASK_PENDING})
  axios
    .patch(
      `http://localhost:4500/tasks/edit/${id}`,
      obj
    )
    .then((res) => {
      console.log(res.data);
      dispatch({type:POST_TASK_SUCCESS})
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({type:TASK_FAILURE})
    });
};
