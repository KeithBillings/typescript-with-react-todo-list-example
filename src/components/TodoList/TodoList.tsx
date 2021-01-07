import "./TodoList.styles.scss";

interface TodoListProps {
  items: { id: string; text: string }[];
  todoDeleteHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ol>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.todoDeleteHandler.bind(this, todo.id)}>DELETE</button>
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
