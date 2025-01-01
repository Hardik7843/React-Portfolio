import React from 'react'
import { Link } from 'react-router'
import Tooltip from '@mui/material/Tooltip';

const Navbar = () =>
{
  return (
    <div className='bg-[#323232] text-xl h-12 w-56 flex items-center justify-evenly p-4 rounded-lg'>
      <Tooltip title="Home" arrow>
        <Link to={'/'} className='text-[#61f7ff]'>
          <i className="ri-home-4-fill"></i>
        </Link>
      </Tooltip>

      <Tooltip title="Experience" arrow>
        <Link to={'/experience'} className='text-[#a5ff61]'>
          <i className="ri-briefcase-fill"></i>
        </Link>
      </Tooltip>

      <Tooltip title="Skills" arrow>
        <Link to={'/skills'} className='text-[#c379ff]'>
          <i className="ri-tools-fill"></i>
        </Link>
      </Tooltip>

      <Tooltip title="Projects" arrow>
        <Link to={'/projects'} className='text-[#ffa82df0]'>
          <i className="ri-folder-6-fill"></i>
        </Link>
      </Tooltip>

      <Tooltip title="Contact" arrow>
        <Link to={'/contact'} className='text-[#f3ff19]'>
          <i className="ri-contacts-fill"></i>
        </Link>
      </Tooltip>
      </div>
  )
}

export default Navbar