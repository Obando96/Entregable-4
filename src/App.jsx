import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import UserList from './components/UserList'

const URL_BASE = "https://users-crud.academlo.tech/"

function App() {

  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false);
  const [updatingUser, setUpdatingUser] = useState();

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
  }

  const createUser = (data) => {
    axios
      .post(`${URL_BASE}users/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal();
      })
      .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    axios.get(`${URL_BASE}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios.delete(`${URL_BASE}users/${id}/`)
      .then((res) => getAllUsers(res.data))
      .catch((err) => console.log(err))
  }

  const updateUser = (data, id) => {
    axios.patch(`${URL_BASE}users/${id}/`, data)
      .then((res) => {
        getAllUsers()
        handleClickShowModal()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers();
  }, [])


  return (
    <div className="App">
      <NavBar handleClickShowModal={handleClickShowModal} />
      <UserList users={users} deleteUser={deleteUser} setUpdatingUser={setUpdatingUser} handleClickShowModal={handleClickShowModal} />
      <ModalForm handleClickShowModal={handleClickShowModal} isShowModal={isShowModal} createUser={createUser} updatingUser={updatingUser} updateUser={updateUser} setUpdatingUser={setUpdatingUser}/>
    </div>
  )
}

export default App
