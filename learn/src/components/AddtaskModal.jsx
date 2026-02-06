import React, { useState } from "react";
import { styles } from "../style/styles";

const AddTaskModal = ({ onAdd, onClose }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    status: "Plan",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!task.id || !task.name) {
      alert("ID and Name are required");
      return;
    }
    onAdd(task);
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Add Task</h3>

        <input name="id" placeholder="Task ID" onChange={handleChange} />
        <input name="name" placeholder="Task Name" onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <select name="status" onChange={handleChange}>
          <option>Plan</option>
          <option>Test</option>
          <option>Deploy</option>
        </select>

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleSubmit}>Add</button>
          <button onClick={onClose} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
