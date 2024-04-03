import { useTodoMutation } from "./api/todosApi";

const App = () => {
  const { mutate: addTodo } = useTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    addTodo(
      {
        title,
        completed: false,
      },
      {
        onSuccess: () => {
          console.log("Todo added");
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Todo Title" />
        <button>Kaydet</button>
      </form>
    </div>
  );
};

export default App;
