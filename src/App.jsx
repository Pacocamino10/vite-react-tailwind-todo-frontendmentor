import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";
// const initialState = [
//   {
//     id: 1,
//     tittle: "Complete online Javascript bluuweb Course",
//     completed: true,
//   },
//   {
//     id: 2,
//     tittle: "Go to the gym",
//     completed: false,
//   },
//   {
//     id: 3,
//     tittle: "10 minutes meditation",
//     completed: false,
//   },
//   {
//     id: 4,
//     tittle: "Pick up groceries",
//     completed: false,
//   },
//   {
//     id: 5,
//     tittle: "Complete todo app on Frontend Mentor",
//     completed: true,
//   },
// ];

// vemos si tenemos data en localstorage o retornamos array vacio
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const createTodo = (tittle) => {
    const newTodo = { id: Date.now() + 1, tittle, completed: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter(
    (todo) => todo.completed === false
  ).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("active");

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain  bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900 
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
     md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] "
    >
      <Header />

      <main className="container mx-auto px-4  mt-8 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          todos={filteredTodos()}
        />
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
          todos={todos}
        />
        <TodoFilter changeFilter={changeFilter} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
