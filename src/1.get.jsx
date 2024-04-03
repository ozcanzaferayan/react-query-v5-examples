import { useTodos } from "./api/todosApi";

const App = () => {
  const { data: todos, isLoading, isError } = useTodos();

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error</h1>}
      {todos?.data?.map((todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
    </div>
  );
};

export default App;
