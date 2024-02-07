import { Routes, Route } from 'react-router-dom'
import './App.css'
import StudentsPage from './pages/StudentsPage'
import WelcomePage from './pages/WelcomePage'
import ErrorPage from './pages/ErrorPage'
import StudentDetailsPage from './pages/StudentDetailsPage'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [userName, setUserName] = useState("")

  return (
    <>
      <Navbar />
      <label >Name</label>
      <input onChange={(e) => setUserName(e.target.value)} type="text" />
      <Routes>
        <Route path='/' element={<WelcomePage userName={userName} />} />
        <Route path='/students' element={<StudentsPage />} />
        <Route path='/students/:dittoId' element={<StudentDetailsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
