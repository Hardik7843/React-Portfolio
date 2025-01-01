import React from 'react'
import Navbar from '../components/Navbar.jsx'
import SkillGroupCard from '../components/SkillGroupCard.jsx'

const SkillsPage = () =>
{
  const backendSkills = {
    skillType: "Backend",
    skills: [
      { imgPath: "NodeJS.webp" },
      { imgPath: "express.webp" },
      { imgPath: "mongo.jpg" },
      { imgPath: "JS.png" },
      { imgPath: "django.png" },
    ],
  }

  const frontendSkills = {
    skillType: "Frontend",
    skills: [
      { imgPath: "React.png" },
      { imgPath: "tailwind.png" },
      { imgPath: "bootstrap.png" },
      { imgPath: "html.png" },
    ],
  }

  const devSkills = {
    skillType: "Dev Tools",
    skills: [
      { imgPath: "github.webp" },
      { imgPath: "vscode.png" },
      { imgPath: "figma.png" },
    ],
  }
  return (
    <div className='bg-[#242424] h-screen w-screen p-3'>

      <div className='w-full flex justify-center'>
        <Navbar />
      </div>

      <div className='w-full flex justify-center'>
          <h1 className='text-white text-4xl font-bold m-4'>SKILLS</h1>
        </div>

      <div className='mt-6 w-full flex justify-center gap-3'>
        <SkillGroupCard {...backendSkills} />
        <SkillGroupCard {...frontendSkills} />
        <SkillGroupCard {...devSkills} />

      </div>
    </div>
  )
}

export default SkillsPage