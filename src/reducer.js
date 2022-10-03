const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newTasks = [...state.tasks, action.payload];

    return (state = {
      ...state,
      tasks: newTasks,
      isModalOpen: true,
      modalContent: "Task Added",
    });
  }
  if (action.type === "DELETE") {
    const newTasks = state.tasks.filter((task) => task.id !== action.payload);

    return (state = {
      ...state,
      tasks: newTasks,
      isModalOpen: true,
      modalContent: "Task Deleted",
    });
  }
  if (action.type === "UPDATE") {
    const newTasks = state.tasks.map((curtask) => {
      if (curtask.id === action.payload.id) {
        return { ...curtask, task: action.payload.task };
      }
      return curtask;
    });
    return (state = {
      ...state,
      tasks: newTasks,
      isModalOpen: true,
      modalContent: "Task Updated",
    });
  }
  if (action.type === "COMPLETE") {
    const newTasks = state.tasks.map((curtask) => {
      if (curtask.id === action.payload) {
        return { ...curtask, completed: !curtask.completed };
      }
      return curtask;
    });
    return (state = {
      ...state,
      tasks: newTasks,
      idModalOpen: false,
      modalContent: "Task completed",
    });
  }
};
export default reducer;
