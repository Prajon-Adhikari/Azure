import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   
   
    <nav className="bg-white  text-gray-800 shadow-md fixed top-0 left-0 right-0 z-100 ">
      <div className='bg-red-600 flex justify-between px-[140px]  text-white text-sm py-1'>
        <p>Bharatpur-10,Chitwan</p>
        <p>Let's Build Future Togehter!</p>
        <p>hello@azure.com.np</p>
    </div>
      <div className="container mx-auto flex justify-between items-center px-[140px] py-2">
        <Link to="/" className="text-2xl font-bold">AzureDev</Link> 
        <div className="space-x-14 ">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-600 ' : 'hover:text-red-600'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-600 ' : 'hover:text-red-600'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-600 ' : 'hover:text-red-600'}>Contact</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'text-red-600 ' : 'hover:text-red-600'}>Portfolio</NavLink>
        </div>
        </div>
         </nav>
   
   </>
  )
}

export default Navbar
