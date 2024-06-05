// src/components/UserList.js
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
     const url="http://localhost:5000"
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${url}/api/user/showAll/`);
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/api/users/remove/${id}`);
      setUsers(users.filter((user) => user._id !== id));
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="bg-white p-4 rounded shadow">
        {users.map((user) => (
          <li key={user._id} className="flex justify-between items-center border-b p-2">
            <div>
              <p>{user.name} - {user.email} - {user.city} - {user.phone}</p>
            </div>
            <div className="flex space-x-4">
              <Link to={`/editUser/${user._id}`} className="text-blue-500 hover:underline">Edit</Link>
              <button onClick={() => handleDelete(user._id)} className="text-red-500 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
