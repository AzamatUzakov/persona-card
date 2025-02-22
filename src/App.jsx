import { useState } from 'react'
import './App.css'
const users = [
  { "id": 1, "name": "Alex Adams", "age": 23 },
  { "id": 2, "name": "John Doe", "age": 25 },
  { "id": 3, "name": "Emily Smith", "age": 22 },
  { "id": 4, "name": "Michael Brown", "age": 30 },
  { "id": 5, "name": "Sarah Johnson", "age": 27 },
  { "id": 6, "name": "David Williams", "age": 24 },
  { "id": 7, "name": "Laura Miller", "age": 26 },
  { "id": 8, "name": "James Taylor", "age": 29 },
  { "id": 9, "name": "Sophia Davis", "age": 21 },
  { "id": 10, "name": "Daniel Moore", "age": 28 }
]

function App() {

  const [selectedUser, setSelectedUser] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)


  const openModal = (user) => {
    setSelectedUser(user)
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
    setSelectedUser(null)
  }

  return (

    <div>

      {modalOpen &&
        < div className="modalMainBg" >
          <div className="modal">
            <button className="closeBtn" onClick={() => closeModal()}>&times;</button>
            <h1>{selectedUser?.name}</h1>
            <p>{selectedUser?.age} years old</p>
          </div>

        </div >}


      <div className='container'>


        {users.map((user, inddex) => (
          <div className="profile-container" key={user.id} onClick={() => openModal(user)}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
          </div>
        ))

        }


      </div>
    </div >
  )
}



export default App