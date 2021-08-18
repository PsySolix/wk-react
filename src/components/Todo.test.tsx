import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import { ITodo } from "../services/DataService";

test("shows a todo", () => {
  const todo: ITodo = { id: 1, userId: 1, title: "test", completed: false };
  render(<Todo todo={todo} />);

  const todoElement = screen.getByText(/test/i);
  expect(todoElement).toBeInTheDocument();
});
