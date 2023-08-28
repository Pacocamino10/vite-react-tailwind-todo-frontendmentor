import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain  bg-no-repeat bg-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto px-4  mt-8">
        <TodoCreate />
        <TodoList />
        <TodoComputed />
        <TodoFilter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
