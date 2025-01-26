import React from 'react'

const Todo = ({title, isDone , handleCheck, id,handleDelete ,handleEdit}) => {
  return (
    <div className='flex justify-between gap-4 items-center my-1'>
      <div className='flex items-center gap-2'>
        <input type="checkbox" onChange={handleCheck} checked={isDone} name={id}/>
        <div className={'text-wrap font-semibold text-sm' + (isDone?' line-through':'')}>{title}</div>
      </div>
      <div className='flex gap-2'>
        <button name={id} onClick={handleEdit} className='bg-blue-950 text-white rounded px-2 font-semibold h-fit hover:bg-slate-900 ease-in-out duration-10'><span className="material-symbols-outlined text-lg">edit_square</span></button>
        <button name={id} onClick={handleDelete} className='bg-blue-950 text-white rounded px-2 font-semibold h-fit hover:bg-slate-900 ease-in-out duration-100'><span className="material-symbols-outlined text-lg">delete</span></button>
      </div>
    </div>
  )
}

export default Todo
