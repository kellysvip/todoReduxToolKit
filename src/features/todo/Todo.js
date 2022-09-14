import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodo } from "./todoSlice";
import TodoAdd from "./todoSlice";
import TodoFilterButton from "./todoSlice";
import TodoList from "./todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTodo());
  // }, [dispatch]);

  return (
    <>
      <TodoAdd />
      <TodoList />
      <TodoFilterButton />
    </>
  );
};

export default Todo;
