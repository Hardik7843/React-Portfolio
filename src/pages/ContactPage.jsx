import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import toast from 'react-hot-toast';

const ContactPage = () =>
{
  const [subject, setSubject] = useState('Hire');
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [preventSubmit, setPreventSubmit] = useState(true);
  const submitButtonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== '' && email !== '' && phone !== '') {

      if(subject === 'Other') {
        if(message === '') {
          console.log('Message is empty');
          toast.error('Please enter a message');
        } else {
          toast.success('Thanks for reaching out!');
          setPreventSubmit(true);
        }
      }
      else {
        toast.success('Thanks for reaching out!');
        setPreventSubmit(true);
      }
    }
  }   
  

  useGSAP(() => {
    if(preventSubmit) {
      gsap.to(submitButtonRef.current, {
        backgroundColor: "#242424",
        color: "#ffff"
      })

    } else {
      gsap.to(submitButtonRef.current, {
        backgroundColor: "#f3ff19",
        color: "#000"
      })
    }
  }, [preventSubmit])

  useEffect(() => {
    if(name !== '' && email !== '' && phone !== '') {
      if(subject === 'Other') {
        if(message === '') {
          setPreventSubmit(true);
        } else {
          setPreventSubmit(false);
        }
      }
      else {
        setPreventSubmit(false);
      }
    }
    else {  
      setPreventSubmit(true);
    }
  }, [name, email, phone, message, subject])

  return (
    <div className='bg-[#242424] h-screen w-screen p-3'>
 
      <div className='w-full flex justify-center'>
        <Navbar />
      </div>

      <div className='w-full flex justify-center px-10'>
        <h1 className='text-white text-xl m-4'>Have a question? Let's connect!</h1>
      </div>

      <div className='bg-[#323232] flex justify-center mx-10 px-8 py-6'>
        <div className='w-3/6  text-white mr-4'>
          <h1 className='text-2xl'>Contact Details</h1>
            <div className=' h-4/6 flex flex-col justify-center gap-2 pl-4'>
              <div className='flex items-center gap-2'>
                <i className="text-[#f3ff19] ri-mail-fill"></i>
                <p>hardikprajapati7843@gmail.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <i className="text-[#f3ff19] ri-phone-fill"></i>
                <p>+91 77158 91774</p>
              </div>
              <div className='flex items-center gap-2'>
                <i className="text-[#f3ff19] ri-map-pin-fill"></i>
                <p>Mumbai, India</p>
              </div>
            </div>

          <div className=' text-xl h-1/4 flex items-center justify-start gap-11 pl-4'>
            <Tooltip title="LinkedIn" arrow placement='top'>
              <Link to={'https://www.linkedin.com/in/prajapatihardik/'}>
                <i className="text-[#f3ff19] ri-linkedin-box-fill"></i>
              </Link>
            </Tooltip>
            
            <Tooltip title="GitHub" arrow placement='top'>
              <Link to={'https://github.com/Hardik7843'}>
                <i className="text-[#f3ff19] ri-github-fill"></i>
              </Link>
            </Tooltip>

            <Tooltip title="LeetCode" arrow placement='top'>
              <Link to={'https://leetcode.com/u/hardikprajapati7843/'}>
                <i className="text-[#f3ff19] ri-code-box-fill"></i>
              </Link>
            </Tooltip>
          </div>
          
        </div>

        <div className='w-5/6 border-4 border-[#f3ff19] rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm p-4'>
          <form 
            onSubmit={handleSubmit} 
            className='bg-transparent p-4 rounded-lg'>
            <div className='flex flex-col gap-4'>
              <input 
                required
                onChange={(e) => setName(e.target.value)}
                type='text' 
                placeholder='Name' 
                className='p-2 text-white  border-2  border-[#f3ff19] bg-transparent rounded-md' 
              />
              <div className='grid grid-cols-2 gap-4'>
                <input 
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type='email' 
                  placeholder='Email' 
                  className='p-2 text-white  border-2  border-[#f3ff19] bg-transparent rounded-md' 
                />
                <input 
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  type='text' 
                  placeholder='Phone' 
                  className='p-2 text-white  border-2  border-[#f3ff19] bg-transparent rounded-md' 
                />
              </div>
              <select 
                onChange={(e) => setSubject(e.target.value)} 
                className='p-2 text-white border-2  border-[#f3ff19] bg-transparent rounded-md'>
                  <option  
                    className='text-black' 
                    value="Hire">Hire Me</option>
                  <option 
                    className='text-black' 
                    value="Work">Work with Me</option>
                  <option 
                    className='text-black' 
                    value="Other">Other</option>
              </select>
              
              {subject === 'Other' && (
                <textarea 
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='Mention you reason' 
                  className='p-2 text-white  border-2  border-[#f3ff19] bg-transparent rounded-md' 
                />
              )}

              <div className='flex justify-end'>
                <button 
                  type='submit'
                  disabled={preventSubmit}
                  ref={submitButtonRef} 
                  className=' w-1/2  p-2 rounded-md'>Send <i className="ri-send-plane-fill"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactPage