import React from "react";

export default function Item({ id, taskText, task, deleteTask, changeStatus, onChangeForm }) {
    const onClickDel = (e) => {
        const delTask = e.target.closest('.task');
        delTask.style.transform = "translateX(-100px)"; 
        delTask.style.opacity = "0"; 
        setTimeout(()=> {
            delTask.style.display = "none";
            deleteTask(task)
            onChangeForm();
        }, 200)
    }
    const onClickTask = (e) => {
        changeStatus(task);
    }

  return (
    <li id={id}
    className={task.isCompletedTask 
        ? 'opacity-20 task flex justify-between items-center transition border-b px-2 py-3 cursor-pointer hover:bg-gray-100' 
        : "task flex justify-between items-center transition border-b px-2 py-3 cursor-pointer hover:bg-gray-100"}
    onClick={e => onClickTask(e)}>
        <p className="w-full overflow-hidden text-ellipsis">{taskText}</p>
        <button className="ml-3 rounded-full border w-7 h-7 text-center text-gray-400 border-gray-400 select-none duration-300 transition-all 
        focus:ring-1 focus:ring-blue-300 hover:rotate-180"
        onClick={e => onClickDel(e)}>X</button>
    </li>
  )
}
