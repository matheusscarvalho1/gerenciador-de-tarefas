import { useState } from "react";
//import axios from "axios";

import "./Tasks.scss";

import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar Programação",
      isCompleted: false,
    },

    {
      id: "2",
      description: "Ler Livros",
      isCompleted: false,
    },
    {
      id: "3",
      description: "Ir na academia",
      isCompleted: true,
    },
  ]);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask />

        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem task={lastTask} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === true)
            .map((completedTask) => (
              <TaskItem task={completedTask} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
