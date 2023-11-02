import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className='bg-purple p-3'>
        <div className='flex justify-end items-center'>
            <NavLink className='px-2 font-semibold text-white'>
                Ma bibliothèque
            </NavLink>
            <NavLink className='px-2 font-semibold text-white'>
               Mon compte
            </NavLink>
        </div>
    </div>
  )
}
