import React, { useState } from "react";
import AddTaskModal from "../components/AddtaskModal";
import TaskList from "../components/TaskList";
import { styles } from "../style/styles";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Add Button */}
      <button style={styles.addBtn} onClick={() => setShowModal(true)}>
        +
      </button>

      {/* Modal */}
      {showModal && (
        <AddTaskModal
          onAdd={addTask}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Sections */}
      <div style={styles.container}>
        <TaskList title="Plan" tasks={tasks.filter(t => t.status === "Plan")} />
        <TaskList title="Test" tasks={tasks.filter(t => t.status === "Test")} />
        <TaskList title="Deploy" tasks={tasks.filter(t => t.status === "Deploy")} />
      </div>
    </div>
  );
};

export default TaskApp;
