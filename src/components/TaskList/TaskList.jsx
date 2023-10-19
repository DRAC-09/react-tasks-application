import "./taskList.css";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../context/TasksContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No hay Tareas</h1>;
  }

  return (
    <div>
      <table>
        <tbody>
          <tr className="encabezado">
            <td style={{ width: 20 }}>id</td>
            <td style={{ width: 120 }}>Nombre</td>
            <td style={{ width: 150 }}>Descripción</td>
          </tr>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
