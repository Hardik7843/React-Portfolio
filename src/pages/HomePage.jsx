import React from 'react'
import Navbar from '../components/Navbar.jsx'
import PhotoCard from '../components/PhotoCard.jsx'
const HomePage = () =>
{
    return (
        <div className='bg-[#242424] h-screen w-screen py-3 px-8'>

            <div className='w-full flex justify-center mb-8'>
                <Navbar />
            </div>

            <div className='flex justify-start  mx-20 gap-8 '>
                <div>
                    <PhotoCard />
                </div>

                <div>
                    <div className='flex flex-col px-4'>

                        <h1 className='font-semibold text-white text-6xl mt-3'>SOFTWARE</h1>
                        <h1 className='font-semibold text-[#757575] text-6xl mt-3'>ENGINEER</h1>
                        <div className='mt-4 text-lg'>
                            <p className='mt-3 text-white w-full pr-5'>Hi, I'm Hardik Prajapati, a budding software engineer passionate about building dynamic and user-friendly web applications. Currently, I'm diving deep into the MERN stack (MongoDB, Express.js, React, and Node.js) to master full-stack development.
                            </p>
                            <p className='mt-3 text-white w-full pr-5'>
                                In addition to web development, I actively solve Data Structures and Algorithms (DSA) problems to sharpen my problem-solving skills.
                                I love exploring new technologies, working on complex projects.
                                I am open to work on exciting projects.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomePage