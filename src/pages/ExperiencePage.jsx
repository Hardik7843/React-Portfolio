import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ExperienceCard from '../components/ExperienceCard.jsx'

const ExperiencePage = () => {
  const sampleData = {
    title: "Backend Developer Intern",
    CompanyName: "CyberCraft LLC",
    StartDate: "July 24",
    EndDate: "Sept 24",
    Responsibilities: [
      "Worked on the development of an AI-powered application and improving the accuracy of responses.",
      "Implemented REST APIs and error-handling techniques in Python using frameworks such as Django and Flask for data preprocessing.",
      "Integrated AI into a blogging site to generate content and images."
    ],
  };

  const sampleData2 = {
    title: "Software Engineer Intern",
    CompanyName: "IT JobXS",
    StartDate: "March 24",
    EndDate: "June 24",
    Responsibilities: [
      "Developed a fully responsive landing page for an upcoming product, showcasing its features.",
      "Enhanced user experience with toast notifications.",
      "Implemented Nodemailer to handle user queries about the product via email."
    ],
   }


  
  return (
    <div className='bg-[#242424] h-screen w-full p-3'> 

        <div className='w-full flex justify-center'>
            <Navbar />
        </div>
        
        <div className='w-full flex justify-center'>
          <h1 className='text-white text-4xl font-bold m-4'>WORK EXPERIENCE</h1>
        </div>

          <div className='mt-6 grid grid-cols-2 gap-11 px-10'>
            <ExperienceCard {...sampleData} />
            <ExperienceCard {...sampleData2} />
          </div>
    </div>
  )
}

export default ExperiencePage