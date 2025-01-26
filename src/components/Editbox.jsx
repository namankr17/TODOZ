import React from 'react'

const Editbox = ({editTask, handleSave, handleCancel, handleChangeEdit}) => {

    const handleEnterKey = (e)=>{
        if(e.key == 'Enter' && e.target.value.length > 3) handleSave()
    }

  return (
    <div className='w-screen h-screen backdrop-blur-sm fixed top-0 left-0 z-20 flex justify-center items-center'>
      <div className='sm:w-[600px] w-full mx-5 bg-blue-500 flex flex-col gap-5 p-8 sm:px-10 rounded-xl justify-between'>
        <div className='text-black font-bold text-center text-lg'>Edit Your Task</div>
        <input autoFocus value={editTask} onChange={handleChangeEdit} onKeyDown={handleEnterKey} type="text" className='rounded h-8 w-full outline-none focus:border-2 focus:border-slate-900 px-2'/>
        <div className='flex justify-center gap-8'>
            <button className='bg-blue-950 hover:bg-black duration-100 ease-in-out text-white h-8 rounded sm:w-1/6 w-1/3 font-semibold' onClick={handleSave}>Save</button>
            <button className='bg-blue-950 hover:bg-black duration-100 ease-in-out text-white h-8 rounded sm:w-1/6 w-1/3 font-semibold' onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Editbox
