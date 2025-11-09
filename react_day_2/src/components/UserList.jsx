import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <section>
      <h2>All Users (from Backend)</h2>
      <div className="user-container">
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard key={user.id} name={user.name} email={user.email} />
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </section>
  );
}

export default UserList;
