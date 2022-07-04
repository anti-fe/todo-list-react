import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import './index.css'

function App(){
  // Список дел в local storage
  const LSListTask = localStorage.getItem("TaskList") ? JSON.parse(localStorage.getItem("TaskList")) : [];
  // Локальный стейт для списка дел
  const [listTask, setListTask] = useState(LSListTask);
  // Локальный стейт для отображения пустой коробки
  const [emptyBox, setEmptyBox] = useState(localStorage.getItem("TaskList")                          
    ?(JSON.parse(localStorage.getItem("TaskList")).length > 0 ? false : true) 
    : NaN);
  // При изменении listTask
  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(listTask));
  }, [listTask])

  const onChangeForm = () => {
    const listTastLength = listTask.length;
    listTastLength > 0 ? setEmptyBox(false) : setEmptyBox(true);
  }
  const changeList = (newTask) => {
    setListTask([...listTask, newTask])
    setEmptyBox(false);
  }
  const changeStatus = (task) => {
    listTask.map(item => {
      if(item.idTask === task.idTask) {
        item.isCompletedTask = !item.isCompletedTask
      } 
      return setListTask([...listTask]);
        
    })
  }
  const deleteTask = (task) => {
    listTask.map((item, i) => {
      if(item.idTask === task.idTask) {
        listTask.splice(i, 1);
      } 
      return setListTask([...listTask]);
    })
  }

  return ( 
    <div className="App flex flex-col justify-center items-center px-4 mt-12 ">
      <Form 
      onChangeForm={onChangeForm}
      changeList={changeList}/>
      <List 
      listTask={listTask}
      changeStatus={changeStatus}
      deleteTask={deleteTask}
      emptyBox={emptyBox}
      onChangeForm={onChangeForm}
      />
      
    </div>
  );
}

export default App;