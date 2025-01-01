import { useState } from 'react'
// import './App.css'
import 'remixicon/fonts/remixicon.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Toaster } from 'react-hot-toast';
function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
