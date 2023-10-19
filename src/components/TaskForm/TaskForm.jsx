import "./taskForm.css";
import { useState, useContext } from "react";
import { TaskContext } from "../../context/TasksContext";

function TaskForm() {
  const [tittle, setTittle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { tittle, description };
    createTask(newTask);
    setTittle("");
    setDescription("");
  };

  return (
    <div className="formulario">
      <h3 className="titulo">Nueva Tarea</h3>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td className="head">Titulo:</td>
              <td>
                <input
                  type="text"
                  required
                  autoFocus
                  onChange={(e) => {
                    setTittle(e.target.value);
                  }}
                  value={tittle}
                />
              </td>
            </tr>
            <tr>
              <td className="head">Descripción:</td>
              <td>
                <textarea
                  type="text"
                  required
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="tdBoton">
                <button className="boton" type="submit">
                  Agregar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default TaskForm;
