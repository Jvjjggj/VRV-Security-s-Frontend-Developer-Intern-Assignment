import React, { createContext, useState } from 'react';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);

  const addRole = (role) => {
    setRoles([...roles, { id: Date.now(), ...role }]);
  };

  const editRole = (id, updatedRole) => {
    setRoles(roles.map((role) => (role.id === id ? { ...role, ...updatedRole } : role)));
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <RoleContext.Provider value={{ roles, addRole, editRole, deleteRole }}>
      {children}
    </RoleContext.Provider>
  );
};
