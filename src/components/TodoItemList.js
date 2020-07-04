import TodoItem from "./TodoItem";
import React from "react";

function TodoItemList({ todos, onToggle, onRemove }) {
  const todoList = todos.map(({ id, text, checked }) => (
    <TodoItem
      id={id}
      text={text}
      checked={checked}
      onToggle={onToggle}
      onRemove={onRemove}
      key={id}
    />
  ));
  return <div>{todoList}</div>;
}

export default TodoItemList;
