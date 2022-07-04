import React, { useState } from "react";

export default function Form({ changeList, onChangeForm }) {
    const [task, setTask] = useState('');
    const [errorInput, setErrorInput] = useState('');

    const onChangeInput = (e) => {
        setTask(e.target.value);
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(task !== '' && task.length > 3 && task.length <= 49) {
            const newTask = {
                "idTask": Math.random().toString(36).substring(2, 10),
                "textTask": task,
                "isCompletedTask": false, 
            }
            changeList(newTask);
            setErrorInput('');
        } else {
            setErrorInput('Не более 49 и не менее 3 символов');
        }
        setTask('');
    }

  return (
    <>
        <form className='w-full max-w-lg flex'
        onSubmit={(e) => onSubmitForm(e)}>
            <input 
            className='w-full transition px-4 py-2 border border-r-0 border-gray-300 focus:outline-none focus:ring-2 rounded-l' 
            type="text" 
            value={task}
            placeholder="Введите задание"
            onChange={(e) => onChangeInput(e)}/>

            <button className='px-4 py-2 text-white bg-blue-400 transition rounded-r border
            focus:outline-none focus:ring-2 hover:bg-slate-100 focus:bg-blue-500'
            >Добавить</button>

        </form>
        <p className="text-start max-w-lg w-full errorInput pb-3 text-red-400 text-xs mt-2">{errorInput}</p>
    </>
  )
}
