import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import React, { useState } from "react";

let id = 3;
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    // { id: 0, text: " 리액트 소개", checked: false },
    // { id: 1, text: "JSX 사용해보기", checked: true },
    // { id: 2, text: "라이프 사이클 이해하input기", checked: false },
  ]);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleCreate() {
    setInput("");
    setTodos(
      todos.concat({
        id: id++,
        text: input,
        checked: false,
      })
    );
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleCreate();
    }
  }

  function handleToggle(id) {
    const index = todos.findIndex((todos) => todos.id === id);
    //index는 클릭된 todos안 배열의 객체인덱스
    const selected = todos[index];
    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,//...
      checked: !selected.checked,
    };
    console.log(...selected);

    setTodos(nextTodos);
    // console.log(nextTodos[index]);
    // console.log(todos);
  }

  function handleRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <TodoListTemplate
      form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }
    >
      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </TodoListTemplate>
  );
}

export default App;
