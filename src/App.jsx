import { Routes, Route } from 'react-router-dom'
import './App.css'
import StudentsPage from './pages/StudentsPage'
import WelcomePage from './pages/WelcomePage'
import ErrorPage from './pages/ErrorPage'
import StudentDetailsPage from './pages/StudentDetailsPage'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<WelcomePage userName="Pablito" />} />
        <Route path='/students' element={<StudentsPage />} />
        <Route path='/students/:dittoId' element={<StudentDetailsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
