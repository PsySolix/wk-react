import React, { useState, useEffect } from "react";
import "./App.css";
import DataService, { ITodo } from "./services/DataService"; // Complete this service
import Todo from "./components/Todo"; // Use this TODO component to loop

function App() {
  // Use state already set, ready to be used!
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleTodoClick(id: number) {
    // CODE HERE: Use the ID to set the todos state
  }

  useEffect(() => {
    // CODE HERE: Use the DataService to fetch todos and set the state
  }, []);

  return (
    <div className="App">
      <div className="todos">
        <h2>{todos.length > 0 ? "Todos" : "Loading..."}</h2>
        {/* CODE HERE: Loop over the todos with the <Todo/> */}
      </div>
    </div>
  );
}

export default App;
