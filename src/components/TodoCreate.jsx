import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [tittle, setTittle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!tittle.trim()) {
      return setTittle("");
    }
    createTodo(tittle);
    setTittle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className=" rounded-md bg-white  overflow-hidden py-4 flex gap-4 items-center px-4 "
    >
      <span className=" rounded-full border-2 w-5 h-5 inline-block"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none"
        value={tittle}
        onChange={(e) => {
          setTittle(e.target.value);
        }}
      />
    </form>
  );
};
export default TodoCreate;
