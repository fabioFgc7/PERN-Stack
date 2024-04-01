import { Route, Routes } from "react-router-dom";
import { TaskForm } from "./pages/TaskForm";
import { TaskContext } from "./context/TaskContext";
import { TasksPages } from "./pages/TasksPages";
import "./index.css";

function App() {
  return (
    <TaskContext>
      {" "}
      <main className='w-full'>
        <Routes>
          <Route
            path='/'
            element={<TasksPages />}
          />
          <Route
            path='/add-task'
            element={<TaskForm />}
          />
          <Route
            path='/task/:id'
            element={<TaskForm />}
          />
        </Routes>
      </main>
    </TaskContext>
  );
}

export default App;
