// import axios from "axios";
import React, { useState, useReducer } from "react";
import reducer from "./reducer";
import Form from "./form";
//Default State Value
const defaultState = {
  tasks: [{ id: "1", task: "Go Home" }],
  isModalOpen: false,
  modalContent: "",
};
// Reducer

// Master Component
const App = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submit = async (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), task: input };
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setInput("");

    // const response = await axios.get(url);
    // console.log(response);
  };
  const deleteItem = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  return (
    <>
      <div className="container max-w-lg mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-xl my-5 text-center">Todo App</h2>
        <Form input={input} submit={submit} setInput={setInput} />

        {state.tasks.map((task) => {
          return (
            <div
              key={task.id}
              className=" flex flex-1 w-full border-solid border-5 border-blue-200 rounded mt-5"
            >
              <p className="text-red-500 align-left border-solid border-4 border-blue-500 w-full">
                {task.task}
              </p>
              <button
                onClick={() => deleteItem(task.id)}
                className="bg-red-500 p-1 ml-1 rounded"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
