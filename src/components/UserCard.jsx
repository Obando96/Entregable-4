import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

    const handleClickEdit = () => {
        setUpdatingUser(user)
        handleClickShowModal()
    }

    return (
        <article className='userCard'>
            <h3 className='userCard_name'>{user.first_name} {user.last_name}</h3>
            <hr />
            <ul className='userCard_list'>
                <li className='userCard_item'><span>EMAIL</span>{user.email}</li>
                <li className='userCard_item'><span>BIRTHDAY</span><i className='bx bx-gift'></i>
                    {user.birthday}</li>
            </ul>
            <hr />
            <footer className='userCard_footer'>
                <button className='userCard_btn_delete' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
                <button className='userCard_btn_edit' onClick={handleClickEdit}><i className='bx bx-pencil' ></i></button>
            </footer>
        </article>
    )
}

export default UserCard