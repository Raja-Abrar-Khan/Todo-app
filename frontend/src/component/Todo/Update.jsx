import React, { useEffect, useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';

const Update = ({display,update}) => {
    useEffect(()=>{
        setInputs({ title: update.title, body: update.body })
    },[update]);
    const [Input, setInputs] = useState({ title: "", body: "" });
    const change = (e) => {
        const {name,value} = e.target;
        setInputs({...Input,[name]:value});
    }
    const submit = async() => {
        await axios.put(`http://localhost:1000/api/v2/updateTask/${update._id}`,Input).then((response)=>{
            toast.success(response.data.message);
        });
      
    }
    return (
        <div className="p-5  d-flex justify-content-center align-items-start flex-column update">
            <h3>Update Your Task</h3>
            <input type="text" className="todo-inputs my-4 w-100 p-3" name="title" value={Input.title} onChange={change}/>
            <textarea className="todo-inputs w-100 p-3" name="body" value={Input.body} onChange={change}/>
            <div>
            <button className="btn btn-dark my-4" onClick={submit}>UPDATE</button>
            <button className="btn btn-danger mx-3 my-4" onClick={()=> { display("none")}}>Close</button>
            </div>
        </div>
    );
};
export default Update;