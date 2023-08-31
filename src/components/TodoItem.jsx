import IconCross from "./icons/IconCross";
import IconCheck from "./icons/iconCheck";
const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, tittle, completed } = todo;
  return (
    <article className="flex gap-4  border-b-gray-400 border-b ">
      {/* <button className=" rounded-full border-2 w-5 h-5 inline-block flex-none">
        
      </button> */}
      <button
        className={`w-5 h-5 rounded-full border-2 flex-none  ${
          completed
            ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
            : "  inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p className={` text-gray-600 dark:text-gray-400 grow ${completed && "line-through"} transition-all duration-1000`}>
        {tittle}
      </p>
      <button onClick={() => removeTodo(id)} className="flex-box">
        <IconCross />
      </button>
    </article>
  );
};
export default TodoItem;
