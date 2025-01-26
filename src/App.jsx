import Editbox from "./components/Editbox";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Todo from "./components/Todo"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [newtask, setNewtask] = useState("")
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todos");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editTask, setEditTask] = useState({curr_status: false})
  const [finished, setFinished] = useState(false)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(tasks))
  },[tasks])

  const writing = (e)=>{
    setNewtask(e.target.value)
  }

  const handleCheck = (e)=>{
    let ind = tasks.findIndex((item)=>{
      return item.id == e.target.name
    })
    let temp = tasks.filter(()=>{return true})
    temp[ind].isDone = !temp[ind].isDone
    setTasks(temp)
  }

  const handleAdd = ()=>{
    if(newtask.length>3){
      setTasks([...tasks,{id: uuidv4(), title: newtask,isDone: false}])
      setNewtask("")
    }
  }

  const addEnter = (e)=>{
    if(e.key == 'Enter') handleAdd()
  }

  const handleEdit = (e)=>{
    let idd = e.target.name?e.target.name:e.target.parentNode.name
    let ind = tasks.findIndex((item)=>{
      return item.id == idd
    })
    setEditTask({...tasks[ind],curr_status: true})
  }

  const handleDelete = (e)=>{
    let idd = e.target.name?e.target.name:e.target.parentNode.name
    let a = tasks.filter(item=>{
      return item.id != idd
    })
    setTasks(a)
  }

  const handleSave = ()=>{
    if(editTask.title.length < 4) return
    let temp = tasks.filter(()=>{return true})
    let ind = temp.findIndex(item=>{
      return item.id == editTask.id
    })
    temp[ind].title = editTask.title
    setEditTask({curr_status: false})
    setTasks(temp)
  }
  const handleCancel = ()=>{
    setEditTask({curr_status: false})
  }
  const handleChangeEdit = (e)=>{
    setEditTask({...editTask,title: e.target.value})
  }

  const toggleFinished = ()=>{
    setFinished(!finished)
  }

  return (
    <>
      <Navbar/>
      <main className="w-full text-black">
        <div className="main-box mx-3 my-5 max-w-screen-md md:m-auto md:my-10 bg-blue-400 py-8 px-5 min-[400px]:px-10 rounded-xl flex justify-start flex-col gap-3 min-h-[60vh]">
          <div className="text-xl font-extrabold flex justify-center">T<span className="material-symbols-outlined text-xl font-black">check_circle</span>DOZ<span className="sm:inline hidden"> - Manage all your tasks at one place</span></div>
          <div className="h-[1px] bg-black w-3/4 mx-auto"></div>
          <div className="text-xl font-bold">Add a To-do</div>
          <div className="flex justify-between">
            <input type="text" className="h-8 rounded w-4/5 text-black focus:border-slate-900 focus:border-2 px-2 outline-none" value={newtask} onChange={writing} onKeyDown={addEnter}/>
            <button className="bg-blue-950 h-8 w-1/6 rounded text-white font-bold hover:bg-slate-900 ease-in-out duration-100" onClick={handleAdd}>Add</button>
          </div>
          <div className="h-[0.5px] bg-black w-3/4 mx-auto mt-5"></div>
          <div className="text-xl font-bold mt-3">Your To-dos</div>
          <div className="flex gap-2 items-center my-1 cursor-pointer">
            <div onClick={toggleFinished} className={"duration-700 ease-in h-4 w-6 rounded-full relative" + (finished?" bg-white":" bg-black")}><div className={"duration-700 ease-in-out h-4 w-4 border-2 rounded-full box-border absolute" + (finished?" right-0 bg-blue-700":" right-3 bg-slate-800")}></div></div>
            <div className="font-semibold">Show Finished</div>
          </div>
          {tasks.map(item=>{
            if(finished || !item.isDone) return (<Todo key={item.id} title={item.title} isDone={item.isDone} handleCheck={handleCheck} id={item.id} handleDelete={handleDelete} handleEdit={handleEdit}/>)
          })}
          {tasks.length==0 && <div className="font-semibold text-lg">No tasks to show</div>}
        </div>
      </main>
      <Footer/>
      {editTask.curr_status && <Editbox editTask={editTask.title} handleSave={handleSave} handleCancel={handleCancel} handleChangeEdit={handleChangeEdit}/>}
    </>
  )
}

export default App
