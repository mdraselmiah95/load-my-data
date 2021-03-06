import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name: name, email: email };
    //send data to the server

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const addUser = data;
        const newUsers = [...users, addUser];
        setUsers(newUsers);
      });
    nameRef.current.value = "";
    emailRef.current.value = "";
    e.preventDefault();
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
        <input
          type="email"
          ref={emailRef}
          name="email"
          id=""
          placeholder="Your Email"
        />
        <input type="submit" value="Submit" />
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <h3> Name: {user.name} </h3>
          <h4>Email: {user.email}</h4>
          <h4>{user.born}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
