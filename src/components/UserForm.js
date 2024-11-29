import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const UserForm = ({ user, closeForm }) => {
  const { addUser, editUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Viewer');
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
      setStatus(user.status);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, role, status };
    if (user) {
      editUser(user.id, userData);
    } else {
      addUser(userData);
    }
    closeForm();
  };

  return (
    <div className="modal active">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{user ? 'Edit User' : 'Add User'}</h2>
          <button className="modal-close" onClick={closeForm}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)} className="form-input">
            <option value="Viewer">Viewer</option>
            <option value="Editor">Editor</option>
            <option value="Admin">Admin</option>
          </select>
          <div>
            <label>Status:</label>
            <button type="button" className={`status-toggle ${status ? '' : 'inactive'}`} onClick={() => setStatus(!status)}>
              {status ? 'Active' : 'Inactive'}
            </button>
          </div>
          <button type="submit" className="form-button">{user ? 'Update' : 'Add'} User</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
