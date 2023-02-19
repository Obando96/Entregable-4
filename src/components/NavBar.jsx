import React from 'react'
import "./styles/NavBar.css"

const NavBar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar'>
        <h1 className='navbar_title'>Users CRUD</h1>
        <button className='navbar_btn' onClick={handleClickShowModal}><i className='bx bx-plus'></i>Create new user</button>
    </nav>
  )
}

export default NavBar