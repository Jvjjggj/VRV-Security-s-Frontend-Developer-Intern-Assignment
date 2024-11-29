import React, { useState, useContext, useEffect } from 'react';
import { RoleContext } from '../context/RoleContext';

const RoleForm = ({ role, closeForm }) => {
  const { addRole, editRole } = useContext(RoleContext);
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    if (role) {
      setName(role.name);
      setPermissions(role.permissions);
    }
  }, [role]);

  const handlePermissionChange = (perm) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(perm)
        ? prevPermissions.filter((permission) => permission !== perm)
        : [...prevPermissions, perm]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roleData = { name, permissions };
    if (role) {
      editRole(role.id, roleData);
    } else {
      addRole(roleData);
    }
    closeForm();
  };

  return (
    <div className="modal active">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{role ? 'Edit Role' : 'Add Role'}</h2>
          <button className="modal-close" onClick={closeForm}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Role Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
          <div>
            <label>Permissions:</label>
            <div>
              <input type="checkbox" id="read" checked={permissions.includes('Read')} onChange={() => handlePermissionChange('Read')} />
              <label htmlFor="read">Read</label>
            </div>
            <div>
              <input type="checkbox" id="write" checked={permissions.includes('Write')} onChange={() => handlePermissionChange('Write')} />
              <label htmlFor="write">Write</label>
            </div>
            <div>
              <input type="checkbox" id="delete" checked={permissions.includes('Delete')} onChange={() => handlePermissionChange('Delete')} />
              <label htmlFor="delete">Delete</label>
            </div>
          </div>
          <button type="submit" className="form-button">{role ? 'Update' : 'Add'} Role</button>
        </form>
      </div>
    </div>
  );
};

export default RoleForm;
