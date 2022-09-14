import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./action";

const TodoFilterButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setFilter("SHOW_ALL"))}>Show All</button>
      <button onClick={() => dispatch(setFilter("SHOW_COMPLETED"))}>
        Show Complete
      </button>
      <button onClick={() => dispatch(setFilter("SHOW_ACTIVE"))}>
        Show Active
      </button>
    </div>
  );
};

export default TodoFilterButton;
