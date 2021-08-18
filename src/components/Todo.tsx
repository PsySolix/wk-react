import React from "react";
import { ITodo } from "../services/DataService";
import "./Todo.css";

export default function Todo(props: any) {
  const { todo }: { todo: ITodo } = props;
  return (
    <div
      className={`todo ${todo.completed ? "completed" : ""}`}
      onClick={() => props.onTodoClick(todo.id)}
    >
      <p>
        <strong>{todo.title}</strong>
      </p>
    </div>
  );
}
