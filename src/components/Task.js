import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterTodo, updateTodo } from '../redux/actions';

function Task({ todo }) {
    const [editable, setEditable] = useState(false)
    const [description, setdescription] = useState(todo.description)
   


    let dispatch = useDispatch();

    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div className="col">
                
                    {editable ?
                        <input type="text" className="form-control"
                            value={description}
                            onChange={(e) => {
                                setdescription(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.description}</h4>}
                </div>
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            description: description
                        }))
                        if(editable) {
                         setdescription(todo.description);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(filterTodo(todo.id))}
                >Done</button>
            </div>
        </div>
    )
}

export default Task
