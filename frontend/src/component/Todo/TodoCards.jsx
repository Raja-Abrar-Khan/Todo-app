import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import React from "react";
const TodoCards = ({ title, body ,id ,delid , display , updateId, toBeUpdate}) => {
    return (
        <div className="p-3 todo-cards">
            <div>
                <h5>{title}</h5>
                <p className="todo-cards-p">{body.split("", 77)}...</p>
            </div>
            <div className="d-flex justify-content-around ">
                <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
                onClick={
                    ()=>{
                        display("block");
                        toBeUpdate(updateId);
                    }
                }>
                <GrDocumentUpdate  className="card-icons"/>Update
                </div>
                <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger" onClick={()=>{
                    delid(id);
                }}>
                    <MdDelete className="card-icons del" />Delete
                </div>
            </div>
        </div>
    );
};
export default TodoCards;