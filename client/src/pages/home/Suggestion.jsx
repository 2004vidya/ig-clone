import React from 'react'
import avatar from "../../assets/avatar-svgrepo-com.svg";
const Suggestion = () => {
  return (
    <div className='suggestions mt-30'>
        <div className="title text-gray-600 font-bold">Suggestions for you</div>
        <div className="suggestedusernames">

            <div className="suggusername flex justify-between mt-8 mr-6">
                <div className="usernameleft flex ">
                    <span>
                        <img className='h-[8vh] rounded-full ' src={avatar} alt="" />
                    </span>
                    <div className="userinfo flex flex-col">
                        <span>username</span>
                        <span className='relation text-gray-500 text-sm'>New To Instagram</span>
                    </div>
                </div>
                <button className='text-[#0095f6] font-semibold hover:text-white'>Follow</button>
            </div>
            <div className="suggusername flex justify-between mt-8 mr-6">
                <div className="usernameleft flex ">
                    <span>
                        <img className='h-[8vh] rounded-full ' src={avatar} alt="" />
                    </span>
                    <div className="userinfo flex flex-col">
                        <span>username</span>
                        <span className='relation text-gray-500 text-sm'>New To Instagram</span>
                    </div>
                </div>
                <button className='text-[#0095f6] font-semibold hover:text-white'>Follow</button>
            </div>
            <div className="suggusername flex justify-between mt-8 mr-6">
                <div className="usernameleft flex ">
                    <span>
                        <img className='h-[8vh] rounded-full ' src={avatar} alt="" />
                    </span>
                    <div className="userinfo flex flex-col">
                        <span>username</span>
                        <span className='relation text-gray-500 text-sm'>New To Instagram</span>
                    </div>
                </div>
                <button className='text-[#0095f6] font-semibold hover:text-white'>Follow</button>
            </div>
            <div className="suggusername flex justify-between mt-8 mr-6">
                <div className="usernameleft flex ">
                    <span>
                        <img className='h-[8vh] rounded-full ' src={avatar} alt="" />
                    </span>
                    <div className="userinfo flex flex-col">
                        <span>username</span>
                        <span className='relation text-gray-500 text-sm'>New To Instagram</span>
                    </div>
                </div>
                <button className='text-[#0095f6] font-semibold hover:text-white'>Follow</button>
            </div>





        </div>
    </div>
  )
}

export default Suggestion