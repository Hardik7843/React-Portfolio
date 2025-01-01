import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const ProjectsPage = () => {
  const project1 = {
    ProjectTitle: 'Business Landing Page',
    DemoUrl: 'https://flex-trips.vercel.app/',
    RepositoryUrl: 'https://github.com/Hardik7843/Landing-Page',
    Pointers: [
      'Developed Fully Responsive Landing Page for Upcoming Product, Displaying product’s features.', 
      'Enhanced user experience with toast notifications.', 
      'Made Admin Dashboard for managing user queries and feedbacks.'],
    TechStackList : ['ExpressJS', 
      'React', 
      'MongoDB',
      'Forest Admin',
      'Tailwind CSS']
  }

  const project2 = { 
    ProjectTitle: 'Chat Application',
    DemoUrl: 'https://chat-app-d6rv.onrender.com/login',
    RepositoryUrl: 'https://github.com/Hardik7843/Chat-App',
    Pointers: [
      "Developed a real-time chat application for instant communication.",
    "Designed a backend with JWT authentication and Socket.IO for real-time updates.",
    "Used Zustand for state management, ensuring seamless updates.",
    "Built the frontend with ReactJS and styled it with DaisyUI."],
    TechStackList : ['ExpressJS', 
      'React', 
      'MongoDB',
      'Forest Admin',
      'Tailwind CSS']
  }
  return (
    <div className='bg-[#242424] h-screen w-full p-3'> 

        <div className='w-full flex justify-center'>
            <Navbar />
        </div>
        
        <div className='w-full flex justify-center'>
          <h1 className='text-white text-4xl font-bold m-4'>PROJECT WORK</h1>
        </div>

        <div className='mt-5 grid grid-cols-2 gap-4 px-10'>
          <ProjectCard  {...project1}/> 
          <ProjectCard  {...project2}/>
        </div>
    </div>
  )
}

export default ProjectsPage