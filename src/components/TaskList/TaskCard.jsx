import { VscTrash } from "react-icons/vsc";
import { useContext } from "react";
import { TaskContext } from "../../context/TasksContext";

function TaskCard(prop) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <tr>
      <td>{prop.task.id + 1}</td>
      <td>{prop.task.tittle}</td>
      <td>{prop.task.description}</td>
      <td className="delete">
        <button className="button">
          <VscTrash
            className="VscTrash"
            onClick={() => {
              deleteTask(prop.task.id);
            }}
          />
        </button>
      </td>
    </tr>
  );
}

export default TaskCard;
