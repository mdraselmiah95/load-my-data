import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const 
    //send data to the server

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        
      }
    });

  };

  return (
    <div className="App">
      <h2>Found Users: {users.length}</h2>

      <form onSubmit={handleAddUser}>
        <input
          type="text"
          ref={nameRef}
          name="name"
          id=""
          placeholder="your Name"
        />
        <input type="email"  name="email" id=""  placeholder="Your Email"/>
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
