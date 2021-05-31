import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


function AddTask() {
    let [description, setdescription] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row m-2">
                <input
                
                value={description}
                onChange={(e)=>setdescription(e.target.value)}
                type="text" className="col form-control"/>
                <button
                
                onClick={()=>{
                       dispatch(  addTodo({
                        description: description
                    }));
                        setdescription('');
                    }}
                    
                className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default AddTask
