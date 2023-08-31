const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between py-4 px-4 bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
      <span className="text-gray-400">{computedItemsLeft}</span>
      <button onClick={clearCompleted} className="text-gray-400">
        Clear completed
      </button>
    </section>
  );
};
export default TodoComputed;
