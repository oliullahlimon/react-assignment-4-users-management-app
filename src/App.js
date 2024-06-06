/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('fetching is not complete');
        }
        return res.json();
      })
      .then((user) => {
        setUsers(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {users && <Users users={users} />}
    </div>
  );
};

export default App;
