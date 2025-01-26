import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around bg-slate-900 text-white text-xl h-16 items-center z-10 sticky top-0'>
      <div className="logo font-black cursor-pointer flex items-center">
        <span className='hover:text-2xl'>T</span>
        <span className="material-symbols-outlined text-xl font-black hover:text-2xl">check_circle</span>
        <span className='hover:text-2xl'>D</span>
        <span className='hover:text-2xl'>O</span>
        <span className='hover:text-2xl'>Z</span>
      </div>
      <div className='text-base flex gap-10'>
        <span className='cursor-pointer'>Home</span>
        <span className='cursor-pointer'>Your Tasks</span>
      </div>
    </div>
  )
}

export default Navbar
