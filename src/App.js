import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h2>Found Users: {users.length}</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="your Name" />
        <input type="submit" value="Submit" />
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <h3> Name: {user.name} </h3>
          <h4>{user.born}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
