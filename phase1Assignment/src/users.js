// Mock users database
let users = [
    { id: 1, username: 'superadmin', password: 'superadmin', roles: ['SuperAdmin'] },
    { id: 2, username: 'groupadmin', password: 'groupadmin', roles: ['GroupAdmin'] },
    { id: 3, username: 'chatuser', password: 'chatuser', roles: ['User'] }
  ];
  
  // Function to find a user by username and password
  function findUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
  }
  
  // Function to get all users
  function getUsers() {
    return users;
  }
  
  module.exports = { findUser, getUsers };
  