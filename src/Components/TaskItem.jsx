const TaskItem = ({ task }) => {
  return (
    <>
      <li>{task.description}</li>
      <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
    </>
  );
};

export default TaskItem;
