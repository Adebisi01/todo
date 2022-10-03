// import axios from "axios";
import React, { useState, useReducer } from "react";
import reducer from "./reducer";
import Form from "./form";
import { EditModal } from "./modals";
import Task from "./components/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faCircleCheck,
  // faPencil,
  // faTrashAlt,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
//Default State Value
const defaultState = {
  tasks: [{ id: "1", task: "Go Home", completed: false }],
  isModalOpen: false,
  modalContent: "",
};
// Reducer

// Master Component
const Tasks = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [editTask, setEditTask] = useState({ id: null, task: null });
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submit = async (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      task: input,
      completed: false,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setInput("");
  };
  const deleteItem = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateItem = (id, task) => {
    setShowEdit(true);
    setEditTask({ id, task });
  };
  return (
    <>
      <div className="container max-w-lg mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-xl my-5 text-center">Todo App</h2>

        <Form input={input} submit={submit} setInput={setInput} />
        {showEdit ? (
          <EditModal
            dispatch={dispatch}
            editTask={editTask}
            setEditTask={setEditTask}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          />
        ) : null}
        <Task
          completed={false}
          state={state}
          dispatch={dispatch}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
        <h1 className=" text-green-700 self-start mt-3 text-lg">
          <FontAwesomeIcon icon={faSquareCheck} className="pr-2" />
          Completed Tasks
        </h1>
        <Task
          completed={true}
          state={state}
          dispatch={dispatch}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
};

export default Tasks;
