// import axios from "axios";
import React, { useState, useReducer } from "react";
import reducer from "./reducer";
import Form from "./form";
import { EditModal } from "./modals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPencil,
  faTrashAlt,
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
const App = () => {
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
        {state.tasks
          .filter((task) => task.completed !== true)
          .map((task) => {
            return (
              <div
                key={task.id}
                className=" flex flex-1 w-full border-solid border-5 border-blue-200 text-white rounded mt-5 bg-gray-700 py-3"
              >
                <button
                  type="submit"
                  className="text-sm text-green-500 mx-1 w-7 b rounded-sm border-solid border-2 border-green-500  "
                  onClick={() => {
                    dispatch({ type: "COMPLETE", payload: task.id });
                  }}
                >
                  {task.completed ? (
                    <FontAwesomeIcon icon={faCircleCheck} />
                  ) : (
                    " "
                  )}
                </button>
                <p className="text-dark-500 pl-1 capitalize align-left border-solidrounded w-full">
                  {task.task}
                </p>
                <button
                  class="text-blue-500 rounded ml-2"
                  title="Edit"
                  onClick={() => updateItem(task.id, task.task)}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </button>
                <button
                  onClick={() => deleteItem(task.id)}
                  className=" text-red-500 px-3 ml-1 rounded"
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            );
          })}
        <h1 className=" text-green-700 self-start mt-3 text-lg">
          <FontAwesomeIcon icon={faSquareCheck} className="pr-2" />
          Completed Tasks
        </h1>
        {state.tasks
          .filter((task) => task.completed === true)
          .map((task) => {
            return (
              <div
                key={task.id}
                className=" flex flex-1 w-full border-solid border-5 border-blue-200 text-white rounded mt-5 bg-gray-700 py-3"
              >
                <button
                  type="submit"
                  className="text-sm text-green-500 mx-1 w-7 b rounded-sm border-solid border-2 border-green-500  "
                  onClick={() => {
                    dispatch({ type: "COMPLETE", payload: task.id });
                  }}
                >
                  {task.completed ? (
                    <FontAwesomeIcon icon={faCircleCheck} />
                  ) : (
                    " "
                  )}
                </button>
                <p className="text-dark-500 pl-1 capitalize align-left border-solidrounded w-full">
                  {task.task}
                </p>
                <button
                  class="text-blue-500 rounded ml-2"
                  title="Edit"
                  onClick={() => updateItem(task.id, task.task)}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </button>
                <button
                  onClick={() => deleteItem(task.id)}
                  className=" text-red-500 px-3 ml-1 rounded"
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default App;
