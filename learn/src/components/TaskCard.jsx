import { styles } from "../style/styles";

const TaskCard = ({ task }) => {
  return (
    <div style={styles.card}>
      <strong>{task.name}</strong>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
