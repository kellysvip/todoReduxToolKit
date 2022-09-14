import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "./todoSlice";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);

    default:
      return todos;
  }
};

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state.todo);
  const filteredTodos = getVisibleTodos(todos, filter);
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredTodos.map((todo, i) => (
        <li
          key={i}
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
