import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from './Sidebar/SidebarConfig';

const Siderbar = () => {
    return (
        <div>
            <div>
                <div>
                    <img className='w-40' src='https://i.imgur.com/zqpwkLQ.png' alt='logo' />
                </div>
                <div className='mt-10'>
                    {menu.map((item) =>
                        <div className='flex items-center mb-5 cursor-pointer text-lg'>
                            {item.icon}
                            <p>{item.title}</p>


                        </div>)}

                </div>
            </div>
            <div className='flex items-center cursor-pointer'>
                <IoReorderThreeOutline />
                <p className='ml-5'>More</p>
            </div>

        </div>
    )
}

export default Siderbar