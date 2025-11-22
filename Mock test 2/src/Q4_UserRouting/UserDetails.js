import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*
  Q4: UserDetails Component
  -----------------------------------
  - Fetch user data from backend: http://localhost:4000/users/:id
  - Display user details
*/

const UserDetails = () => {
  const { id } = useParams(); // get ID from URL

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>User: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Details: {user.details}</p>
    </div>
  );
};

export default UserDetails;
