/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTask } from "../context/TaskContext";
import { v4 } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTaskRequest } from "../api/task";
import { ArrowLeftIcon } from "../icons/Icon";
interface NewTask {
  id: string;
  title: string;
  description: string;
}
export const TaskForm = () => {
  const [newTask, setNewTask] = useState<NewTask>({
    id: v4(),
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  const { createTask, updateTask, getTasks } = useTask();
  useEffect(() => {
    async function loadTasks() {
      if (params.id) {
        const res = await getTaskRequest(params.id);
        console.log(res);

        setNewTask({
          id: res.data[0].id,
          title: res.data[0].title,
          description: res.data[0].description,
        });
      }
    }
    loadTasks();
  }, [params.id]);
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.description.length > 255) {
      alert("Description is too long");
    } else {
      navigate("/");
    }
    if (newTask.title === "" || newTask.description === "") {
      alert("Title and description are required");
      return;
    }
    if (params.id) {
      updateTask(params.id, newTask);
      getTasks();
    } else {
      createTask(newTask);
    }
  };
  console.log(newTask.description);

  return (
    <div className=' flex flex-col justify-center items-center w-full h-96 relative'>
      {" "}
      <Link
        to={`/`}
        className='absolute left-3 top-5'>
        <ArrowLeftIcon />
      </Link>
      <h1 className='text-white text-2xl font-bold mb-2'>
        {params.id ? "Edit Task" : "Add Task"}
      </h1>
      <form
        onSubmit={handleOnSubmit}
        className='w-full max-w-lg p-4 rounded-lg border  bg-slate-900 flex flex-col gap-2 '>
        <div className=' w-full '>
          <input
            className='w-full rounded-md p-2 outline-none text-black'
            type='text'
            name='title'
            placeholder='Title'
            value={newTask.title}
            onChange={handleChanges}
          />
        </div>
        <div className=' w-full '>
          {" "}
          <textarea
            className='w-full text-black rounded-md p-2 outline-none max-h-40  min-h-10 overflow-hidden'
            name='description'
            id='description'
            placeholder='Description'
            value={newTask.description}
            onChange={handleChanges}></textarea>
        </div>
        <div className='w-full flex justify-center'>
          <button type='submit'>{params.id ? "Edit Task" : "Add Task"}</button>
        </div>
      </form>
    </div>
  );
};
