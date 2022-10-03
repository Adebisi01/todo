import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPencil,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const Task = ({ state, dispatch, updateItem, deleteItem, completed }) => {
  return (
    <>
      {state.tasks
        .filter((task) => task.completed === completed)
        .map((task) => {
          return (
            <div
              key={task.id}
              className=" flex flex-1 w-full border-solid border-5 border-blue-200 text-white rounded mt-5 bg-gray-700 py-3"
            >
              <button
                title={
                  task.completed ? "Mark as uncompleted" : "Mark as completed"
                }
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
    </>
  );
};

export default Task;
