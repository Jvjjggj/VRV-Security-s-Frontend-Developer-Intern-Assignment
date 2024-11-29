import React, { useState, useContext } from 'react';
import { RoleContext } from '../context/RoleContext';
import RoleForm from './RoleForm';

const RoleList = () => {
  const { roles, addRole, editRole, deleteRole } = useContext(RoleContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const openForm = (role = null) => {
    setSelectedRole(role);
    setIsFormOpen(true);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button onClick={() => openForm()}>Add Role</button>
      <table className="permissions-table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button onClick={() => openForm(role)}>Edit</button>
                <button onClick={() => deleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && <RoleForm role={selectedRole} closeForm={() => setIsFormOpen(false)} />}
    </div>
  );
};

export default RoleList;
