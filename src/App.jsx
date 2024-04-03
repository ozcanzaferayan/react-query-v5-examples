import {
  useUserAddMutation,
  useUserDeleteMutation,
  useUserUpdateMutation,
  useUsers,
} from "./api/usersApi";

const App = () => {
  const { data: users } = useUsers();
  const { mutate: addUser } = useUserAddMutation();
  const { mutate: deleteUser } = useUserDeleteMutation();
  const { mutate: updateUser } = useUserUpdateMutation();

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const user = {
      name,
    };
    addUser(user);
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const user = {
      id,
      name,
      completed: false,
    };
    updateUser(user);
  };

  if (!users) return <div>Loading...</div>;
  const user = users?.data[0];

  return (
    <div>
      <h1>Users</h1>

      <h2>Add user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <button type="submit">Add User</button>
      </form>

      <h2>Edit User</h2>
      <form onSubmit={handleEditUser}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          defaultValue={user.name}
        />
        <button>Save</button>
        <input type="hidden" name="id" value={user.id} />
      </form>

      <h2>User list</h2>
      <ul>
        {users?.data?.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
