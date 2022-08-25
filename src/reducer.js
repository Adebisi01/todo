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
};
export default reducer;
