
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className=' px-4 py-1  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
            Hiring Hotspot
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          
          <li>
            <NavLink
              to='/statistics'  
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/appliedjobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div>
                <button className='home-buttons'>Start Applying</button>
            </div>
        
       
        



      </div>
    </div>
  )
}

export default Header