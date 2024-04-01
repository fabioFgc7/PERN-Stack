/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../icons/Icon";

export const TaskCard = () => {
  const { task, getTasks, deleteTask } = useTask();
  console.log(task);
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className='flex flex-wrap gap-2 w-full md:justify-center lg:justify-start justify-center'>
      {task.map((task) => (
        <div
          key={task.id}
          className=' max-w-xs w-auto  h-fit  bg-slate-900 rounded-md p-6 space-y-1 '>
          <h2 className='text-xl font-semibold '>{task.title}</h2>
          <p className='text-justify'>{task.description}</p>

          <div className='flex  justify-end gap-2 items-center'>
            <Link
              to={`/task/${task.id}`}
              className='font-bold p-2 text-blue-600 '>
              <EditIcon />
            </Link>
            <button
              className=' font-bold text-red-600'
              onClick={() => deleteTask(task.id)}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
