### RBAC UI - Role-Based Access Control Dashboard

This is a React-based Role-Based Access Control (RBAC) Admin Dashboard that allows administrators to manage users, roles, and permissions. The app features a user-friendly interface to handle user management, role management, and permission assignments efficiently.

### Features
User Management:

View, add, edit, and delete users.
Assign roles to users.
Toggle user status (Active/Inactive).
Role Management:

Create, edit, and delete roles.
Assign permissions to roles (Read, Write, Delete).
Permissions Management:

Assign permissions to roles.
Easily view and modify roles and their permissions.
Responsive UI:

Fully responsive design that works on all screen sizes, providing an optimal experience on both desktop and mobile devices.
### Technologies Used
Frontend Framework: React
State Management: React Context API (for managing users and roles)
CSS: Plain CSS for styling
No Backend: This project uses mock data and doesn't require an actual backend API. However, CRUD operations for users and roles are simulated with state management.
Setup and Installation
To get started with the project, follow the instructions below:

### Prerequisites
Node.js (v14 or higher) and npm installed on your system.
You can download Node.js from here.
Steps to Install and Run
Clone the repository:

bash
### Copy code
# git clone https://github.com/yourusername/rbac-app.git
# cd rbac-app
# Install dependencies:

In your project directory, run:

bash
### Copy code
# npm install
# This will install all the necessary dependencies listed in the package.json file.

Run the development server:

After the dependencies are installed, run the development server using:

bash
Copy code
npm start
# This will start the app on http://localhost:3000.

Open in a browser:

Open your browser and navigate to http://localhost:3000 to see the RBAC Admin Dashboard in action.

### Folder Structure
Here’s the structure of the project:

java
Copy code
rbac-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserList.js
│   │   ├── UserForm.js
│   │   ├── RoleList.js
│   │   ├── RoleForm.js
│   ├── context/
│   │   ├── UserContext.js
│   │   ├── RoleContext.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
├── package.json
├── README.md
└── .gitignore
components/ contains all the React components used for displaying the UI.
context/ contains context providers (UserContext.js and RoleContext.js) for managing user and role data globally.
App.js is the main entry point for the React app, rendering the UserList and RoleList components.
App.css contains the styles for the app.
Contribution
Feel free to fork the project and submit pull requests if you have improvements or bug fixes.

# How to Contribute
Fork the repository.
Create a new branch for your feature or bug fix.
Make changes and commit them.
Push your changes to your forked repository.
Create a pull request to the main repository.
