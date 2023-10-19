import "./app.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="app">
      <div className="center">
        <TaskForm />
        <br />
        <hr />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
