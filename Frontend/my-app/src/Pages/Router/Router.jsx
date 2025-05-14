import React from 'react'
import Siderbar from '../../Components/Siderbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'
import Profile from '../Profile/Profile'

const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] border border-l-slate-500 '>
                    <Siderbar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<Homepage />}></Route>

                        <Route path='/username' element={<Profile />}></Route>
                    </Routes>

                </div>
            </div>

        </div>
    )
}

export default Router