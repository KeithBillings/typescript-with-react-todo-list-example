// import React from 'react'; // importing no longer needed with React 17
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import NewTodo from "./components/NewTodo/NewTodo";
import Todo from "./todo.model";
import Title from "./components/Title/Title";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // function that is called when button is pressed. Here to add a new todo item to the todo list array
    setTodos((previousTodos) => [
      // passing a function into the set state, taking the old array of todos as the argument
      ...previousTodos, // old array
      { id: Math.random().toString(), text: text }, // and adding on the new todo list item
    ]);
  };

  const titleText:string = "This example was built with React using typescript and scss"

  return (
    <div className="App">
      <Title text={titleText} />
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};
export default App;

// in the future, do not use React.FC
// instead use JSX.Element
