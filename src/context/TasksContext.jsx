import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TasksContextProvider(prop) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        tittle: task.tittle,
        description: task.description,
      },
    ]);
  }

  function deleteTask(i) {
    const newTasks = tasks.filter((n) => n.id != i);
    setTasks(newTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {prop.children}
    </TaskContext.Provider>
  );
}
