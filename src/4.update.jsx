import { useTodoUpdateMutation, useTodos } from "./api/todosApi";

const App = () => {
  const { data: todos } = useTodos();

  const { mutate: updateTodo } = useTodoUpdateMutation();

  if (!todos) return;

  const todo = todos?.data[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const title = e.target.title.value;
    const todo = {
      id,
      title,
      completed: false,
    };
    updateTodo(todo, {
      onSuccess: () => {
        console.log("Todo UPDATED");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Todo Title"
        defaultValue={todo.title}
      />
      <button>Save</button>
      <input type="hidden" name="id" value={todo.id} />
    </form>
  );
};

export default App;
