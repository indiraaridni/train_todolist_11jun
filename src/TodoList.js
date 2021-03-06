import React, {useState} from 'react';
import './App.css';

const trash = (<svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>)

const pencil = (<svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
    <path fillRule="evenodd"
          d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
</svg>)


const chekStyle = {
    top: 5,
    left: 15,
};

function TodoList(props) {

    const [taskEdit, setTaskEdit] = useState({});

    const editMode = (task) => {
        setTaskEdit(task)
    };

    const onEditTaskChange = (e) => {
        setTaskEdit({...taskEdit, name: e.target.value})
    };

    const taskSave = (task) => {
        props.onTaskSave(taskEdit);
        setTaskEdit({});
    };

    return (
        <div className="TodoList">

            <ul className="list-group">
                {props.todos.map(el => <li key={el.id} className="list-group-item"
                >

                    {/*{el.done ? checkmark : null}*/}

                    {
                        taskEdit.id === el.id
                            ? <>
                                <input type="text" value={taskEdit.name} onChange={onEditTaskChange}/>
                                <button onClick={taskSave} disabled={!taskEdit.name.trim()}>Save</button>

                            </>
                            // : <span onClick={() => editMode(el)}>{el.name}</span>
                            :
                            <>
                                <span className="form-check">
                                    <input className="form-check-input" style={chekStyle} type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1"> {el.name} </label>
                                    <button onClick={() => editMode(el)}>{pencil}</button>
                                    <button onClick={() => props.onTaskDelete(el.id)}>{trash}</button>
                                </span>

                            </>
                    }

                    {/*<button onClick={() => props.onTaskDoneToggle(el.id)}>*/}
                    {/*    /!*{el.done ? 'Undone' : 'Done'}*!/*/}
                    {/*</button>*/}



                </li>)
                    }
                    </ul>
                    </div>
                    );
                    }

                    export default TodoList;
