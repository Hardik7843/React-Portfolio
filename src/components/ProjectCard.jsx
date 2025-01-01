import React from 'react'
import RedirectButton from './RedirectButon'

const ProjectCard = (props) =>
{
    return (
        <div className='bg-[#181818] flex flex-col justify-between rounded-lg h-56 px-3 py-4'>
            <div className='flex'>
                <div className='w-3/5'>
                    <h1 className='text-white text-2xl font-bold'>{props.ProjectTitle}</h1>
                </div>
                <div className='w-2/5 flex justify-end items-center gap-2'>
                    <RedirectButton Name='Demo' redirectTo={props.DemoUrl} className='py-1 rounded-lg bg-[#09CAFF] hover:bg-emerald-400 flex justify-center' />
                    <RedirectButton Name='Code' redirectTo={props.RepositoryUrl} className='py-1 rounded-lg bg-[#5D5D5D] hover:bg-[#414141] flex justify-center text-white' />
                </div>
            </div>

            <div className=' pl-5 py-3 mt-3 rounded-lg'>
                <ul className="list-disc text-sm text-white">
                    {props.Pointers.map((Point, index) => (
                        <li key={index}>{Point}</li>
                    ))}
                </ul>
            </div>

            <div className=' flex justify-start'>
                <p className='text-[#f3a12d] font-semibold text-sm mr-2'>Tech Stack:</p>
                <div className='flex justify-start'>
                    {props.TechStackList.map((Tech, index) => (
                        <div key={index} className='text-sm text-white rounded-lg'>
                            <p className='mr-1'>{Tech}{index === props.TechStackList.length - 1 ? '.' : ','}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard