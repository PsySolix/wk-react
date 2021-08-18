import React, { useState, useEffect } from "react";
import "./App.css";
import DataService, { ITodo } from "./services/DataService";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleTodoClick(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    DataService.request("https://jsonplaceholder.typicode.com/todos").then(
      (data) => {
        setTodos(data);
      }
    );
  }, []);

  return (
    <div className="App">
      <div className="todos">
        {todos.length > 0 &&
          todos.map((todo: ITodo) => {
            return (
              <Todo
                key={todo.id}
                onTodoClick={handleTodoClick}
                todo={todo}
              ></Todo>
            );
          })}
      </div>
    </div>
  );
}

export default App;
