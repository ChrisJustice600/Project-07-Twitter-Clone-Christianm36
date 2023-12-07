import React from 'react'
import ImageSearch from "../iconSide/research.svg"

export default function SideBar() {
  return (
    <div className='sidebarcontainer'>
        <div className='form-side-bar'>
            <img src={ImageSearch} />
            <input type="text" placeholder='Search Twitter' />
        </div>
      
    </div>
  )
}
