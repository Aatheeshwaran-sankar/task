import TaskCard from "./TaskCard";
import { styles } from "../style/styles";

const TaskList = ({ title, tasks }) => {
  return (
    <div style={styles.column}>
      <h3>{title}</h3>

      {tasks.length === 0 && <p>No tasks</p>}

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
