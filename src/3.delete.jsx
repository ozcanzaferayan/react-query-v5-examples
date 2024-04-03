import { useTodoDeleteMutation, useTodos } from "./api/todosApi";

const App = () => {
  const { data: todos } = useTodos();

  const { mutate: deleteTodo } = useTodoDeleteMutation();

  const handleDelete = (id) => {
    deleteTodo(id, {
      onSuccess: () => {
        console.log("Todo DELETED");
      },
    });
  };

  return (
    <ul>
      {todos?.data?.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default App;
