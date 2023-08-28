const TodoCreate = () => {
  return (
    <form className=" rounded-md bg-white  overflow-hidden py-4 flex gap-4 items-center px-4 ">
      <span className=" rounded-full border-2 w-5 h-5 inline-block"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none"
      />
    </form>
  );
};
export default TodoCreate;
