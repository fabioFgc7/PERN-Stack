/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "../api/task";
import { Task, Tasks } from "../type";
interface Props {
  createTask: (task: Task) => void;
  updateTask: (id: string, task: Task) => void;
  deleteTask: (id: string) => void;
  getTasks: () => void;
  getTask: (id: string) => void;
  task: Tasks["task"];
}
const Context = createContext<Props | undefined>(undefined);
export const useTask = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};
export const TaskContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [task, setTask] = useState<Tasks["task"]>([]);
  const createTask = async (task: Task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };
  const updateTask = async (id: string, task: Task) => {
    try {
      const res = await updateTaskRequest(id, task);
      console.log(res);
      if (res.status === 200) setTask([task]);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async (id: string) => {
    try {
      const res = await deleteTaskRequest(id);
      console.log(res);

      if (res.status === 200) setTask(task.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const getTasks = async () => {
    console.log("getTasks");
    const res = await getTasksRequest();
    try {
      setTask(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getTask = async (id: string) => {
    try {
      const res = await getTaskRequest(id);
      return res.config.data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener la tarea");
    }
  };

  return (
    <Context.Provider
      value={{ createTask, deleteTask, getTask, updateTask, getTasks, task }}>
      {children}
    </Context.Provider>
  );
};
