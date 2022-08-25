const Form = (props) => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <form onSubmit={props.submit}>
        <input
          className="shadow appearance-none border rounded w-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.input}
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-sm w-lg p-3 rounded bg-green-500 "
        >
          Add Item
        </button>
      </form>
    </div>
  );
};
export default Form;
