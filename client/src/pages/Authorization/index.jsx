import React, { useState } from 'react'
import Form from './Form'
import Login from './Login'
import Signup from './Signup'

const Auth = () => {
  const [active, setActive] = useState("Signup")

  const handleChange=()=>{
    setActive(active ==="login"?"signup":"login")
  }

  const handleSubmit =()=>{
    
  }
  return (
    <div className='auth flex flex-row items-center
     mt-20 justify-center' >
      <div className="authleft width-[60%] text-center flex items-center justify-center">
        <img className='h-auto lg:h-[38vw] md:h-[50vw]' src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW"  alt="" />
        
      </div>
      <div className="authright width-[40%]">
        {
          active==="login"?(<Login/>):(<Signup/>)
        }
        
      

        <div className="authmore border border-grey-800 p-4 mr-10 ml-10 mt-2 text-center ">
          {
            active==="login"?(<><span className=' font-semibold'>Dont have an account ? <button onClick={handleChange} className='text-[#0095f6] cursor-pointer hover:text-white'>Sign Up</button></span></>):(<><span className=' font-semibold'>Already have an account ? <button onClick={handleChange} className='text-[#0095f6] cursor-pointer hover:text-white'>Log in</button></span></>)
          }
          
        </div>
      </div>
        
    </div>
  )
}

export default Auth