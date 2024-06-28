// UserContext.js
import React, { useContext, createContext } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const user = { name: 'John Doe', age: 30 ,Designation:"SDE"};
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function UserProfile() {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>useContext Hook Example</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Designation: {user.Designation}</p>
    </div>
  );
}

export { UserProvider, UserProfile };
