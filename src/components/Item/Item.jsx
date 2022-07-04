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
        <p className={ task.isCompletedTask ? "line-through w-full overflow-hidden text-ellipsis" : "w-full overflow-hidden text-ellipsis" }>{taskText}</p>
        <button className="ml-3 rounded-full select-none duration-300 transition-all 
        focus:scale-110 hover:rotate-12"
        onClick={e => onClickDel(e)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#262626"/>
            </svg>
        </button>
    </li>
  )
}
