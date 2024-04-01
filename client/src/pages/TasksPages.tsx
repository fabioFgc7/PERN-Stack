import { Link } from "react-router-dom";
import { TaskCard } from "../components/TaskCard";
import { AddIcon } from "../icons/Icon";

export const TasksPages = () => {
  return (
    <div className='p-5 w-full flex justify-center '>
      <div className='w-full rounded-lg bg-slate-700  p-3'>
        <div className='w-full flex justify-between items-center'>
          <h1 className='text-white text-xl font-bold'>Tasks Managers</h1>

          <Link
            className=''
            to={`/add-task`}>
            <AddIcon />
          </Link>
        </div>
        <div className='w-full p-3 flex justify-center'>
          <TaskCard />
        </div>
      </div>
    </div>
  );
};
