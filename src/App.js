import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import { UserProvider } from './context/UserContext';
import { RoleProvider } from './context/RoleContext';

function App() {
  return (
    <UserProvider>
      <RoleProvider>
        <div className="container">
          <h1>RBAC Admin Dashboard</h1>
          <UserList />
          <RoleList />
        </div>
      </RoleProvider>
    </UserProvider>
  );
}

export default App;
