import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserForm from './UserForm';

const UserList = () => {
  const { users, addUser, editUser, deleteUser } = useContext(UserContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openForm = (user = null) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={() => openForm()}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status ? 'Active' : 'Inactive'}</td>
              <td>
                <button onClick={() => openForm(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && <UserForm user={selectedUser} closeForm={() => setIsFormOpen(false)} />}
    </div>
  );
};

export default UserList;
