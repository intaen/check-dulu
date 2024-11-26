import React, { useState, useEffect } from 'react';
import {getTodos, deleteTodo, updateTodo, createTodo } from '../services/ReportLeadsServices';

// Popup Component
const Popup = ({ status, onStatusChange, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h3>Change Status</h3>
      <label htmlFor="status-dropdown">Select Status:</label>
      <select
        id="status-dropdown"
        value={status}
        onChange={onStatusChange}
        style={{ margin: "10px 0", padding: "5px" }}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <p>Current Status: {status}</p>
      <button onClick={onClose}>Cancel</button>
      <button>Submit</button>
    </div>
  );
};

export default function ReportLeads() {
  const [leads, setLeads] = useState([]);

  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState("Pending");

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        console.log('Fetched Todos:', data); // Log untuk memastikan data ada
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTodos();
  }, []);

  useEffect(() => {
    console.log('Todos state actually updated:', todos);
  }, [todos]);
 
  return (
    <div className="report-leads">
      <h2>Lead Report</h2>
      <table>
        <thead>
          <tr>
          <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Yes" : "No"}</td>
              <td><button onClick={togglePopup}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render Popup Component */}
      {showPopup && (
        <Popup
          status={status}
          onStatusChange={handleStatusChange}
          onClose={togglePopup}
        />
      )}
    </div>
  );
}

